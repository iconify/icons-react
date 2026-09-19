import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us0x9w4kp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us0x9w4kp"/>`,
		"fallback": "fluent-mdl2:save-template",
	});
}

export default Component;
