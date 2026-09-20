import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/imxlj3brh.css';
import '../../css/y/y_ochobwh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="imxlj3brh"/><path class="y_ochobwh"/></g>`,
		"fallback": "streamline-color:paintbrush-1-flat",
	});
}

export default Component;
