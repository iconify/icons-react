import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_m9638xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_m9638xq"/>`,
		"fallback": "tabler:medical-cross-circle",
	});
}

export default Component;
