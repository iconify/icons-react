import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk1zpm-hn.css';
import '../../css/j/j0d7q5h2p.css';
import '../../css/m/m6e2ex0xx.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dk1zpm-hn"><path class="j0d7q5h2p"/><path class="m6e2ex0xx"/></g>`,
		"fallback": "streamline-stickies-color:validation-1-duo",
	});
}

export default Component;
