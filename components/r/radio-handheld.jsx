import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej63n7c8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ej63n7c8v"/>`,
		"fallback": "pixelarticons:radio-handheld",
	});
}

export default Component;
