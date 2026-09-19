import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkyoe0byq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkyoe0byq"/>`,
		"fallback": "bxs:skip-next-circle",
	});
}

export default Component;
