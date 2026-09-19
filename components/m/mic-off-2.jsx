import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f98jvfbjm.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f98jvfbjm"/>`,
		"fallback": "fluent-mdl2:mic-off-2",
	});
}

export default Component;
