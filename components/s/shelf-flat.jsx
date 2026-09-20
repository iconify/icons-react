import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/epfjlqt3c.css';
import '../../css/q/qxwoecc7n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="epfjlqt3c"/><path clip-rule="evenodd" class="qxwoecc7n"/></g>`,
		"fallback": "streamline-color:shelf-flat",
	});
}

export default Component;
