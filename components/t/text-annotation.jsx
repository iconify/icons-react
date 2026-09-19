import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/uzj4pbz7k.css';
import '../../css/f/fjdu8ejaj.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path transform="matrix(1.00396 0 0 1.01551 -3.915 995.337)" class="uzj4pbz7k"/><path transform="matrix(1.00396 0 0 1.01551 -3.915 995.337)" class="fjdu8ejaj"/></g>`,
		"fallback": "bpmn:text-annotation",
	});
}

export default Component;
