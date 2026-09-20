import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dv7-g1bjh.css';
import '../../css/j/jq6wkjbcr.css';
import '../../css/v/vrp8r0vqw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dv7-g1bjh"/><path clip-rule="evenodd" class="jq6wkjbcr"/><path class="vrp8r0vqw"/></g>`,
		"fallback": "streamline-flex-color:iris-scan-flat",
	});
}

export default Component;
