import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk_n2-62d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk_n2-62d"/>`,
		"fallback": "tabler:line-dotted",
	});
}

export default Component;
