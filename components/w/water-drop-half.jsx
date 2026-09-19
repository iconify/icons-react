import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq9_pobzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq9_pobzr"/>`,
		"fallback": "boxicons:water-drop-half",
	});
}

export default Component;
