import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr52y7bsg.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr52y7bsg"/>`,
		"fallback": "fluent-mdl2:voicemail-forward",
	});
}

export default Component;
