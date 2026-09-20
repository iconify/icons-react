import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fxyrw8bwp.css';
import '../../css/x/x7z9rul1w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fxyrw8bwp"/><path class="x7z9rul1w"/></g>`,
		"fallback": "streamline-color:iron",
	});
}

export default Component;
