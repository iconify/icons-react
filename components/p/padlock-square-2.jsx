import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8nzs4wii.css';
import '../../css/f/f9p-1hmgu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h8nzs4wii"/><path class="f9p-1hmgu"/></g>`,
		"fallback": "streamline-flex-color:padlock-square-2",
	});
}

export default Component;
