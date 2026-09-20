import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6-c3x6kp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6-c3x6kp"/>`,
		"fallback": "streamline-pixel:user-gender-female",
	});
}

export default Component;
