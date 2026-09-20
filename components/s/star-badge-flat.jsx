import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pg40lro8p.css';
import '../../css/h/h6i0ijbtb.css';
import '../../css/m/msqsf4b6u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pg40lro8p"/><path clip-rule="evenodd" class="h6i0ijbtb"/><path class="msqsf4b6u"/></g>`,
		"fallback": "streamline-color:star-badge-flat",
	});
}

export default Component;
