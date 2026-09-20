import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s7bebebip.css';
import '../../css/f/f2ltd7bbc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s7bebebip"/><path class="f2ltd7bbc"/></g>`,
		"fallback": "streamline-color:waning-cresent-moon",
	});
}

export default Component;
