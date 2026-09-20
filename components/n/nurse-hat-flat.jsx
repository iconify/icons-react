import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yx6i158qc.css';
import '../../css/m/m47e-zmsb.css';
import '../../css/i/id0zv0baq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yx6i158qc"/><path class="m47e-zmsb"/><path clip-rule="evenodd" class="id0zv0baq"/></g>`,
		"fallback": "streamline-color:nurse-hat-flat",
	});
}

export default Component;
