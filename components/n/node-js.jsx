import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5mk84iud.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5mk84iud"/>`,
		"fallback": "cib:node-js",
	});
}

export default Component;
