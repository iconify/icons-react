import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4xaxyb0f.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4xaxyb0f"/>`,
		"fallback": "fluent-mdl2:toll",
	});
}

export default Component;
