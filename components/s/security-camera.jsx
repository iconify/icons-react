import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6p5uvbhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6p5uvbhx"/>`,
		"fallback": "noviair-light:security-camera",
	});
}

export default Component;
