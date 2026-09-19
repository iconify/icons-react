import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf1ii2b4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hf1ii2b4o"/>`,
		"fallback": "boxicons:water-drop-alt-filled",
	});
}

export default Component;
