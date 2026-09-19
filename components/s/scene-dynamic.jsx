import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cousj-bgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cousj-bgr"/>`,
		"fallback": "cbi:scene-dynamic",
	});
}

export default Component;
