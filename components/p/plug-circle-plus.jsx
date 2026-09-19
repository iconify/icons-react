import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4v16fbye.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4v16fbye"/>`,
		"fallback": "fa7-solid:plug-circle-plus",
	});
}

export default Component;
