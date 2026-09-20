import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dxlzivblf.css';
import '../../css/o/orx8v0b-w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dxlzivblf"/><path clip-rule="evenodd" class="orx8v0b-w"/></g>`,
		"fallback": "streamline-color:navigation-arrow-off-flat",
	});
}

export default Component;
