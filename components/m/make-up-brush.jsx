import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t4m947bzn.css';
import '../../css/e/epzn6nbzp.css';
import '../../css/n/n-z9xqvfj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t4m947bzn"/><path class="epzn6nbzp"/><path class="n-z9xqvfj"/></g>`,
		"fallback": "streamline-color:make-up-brush",
	});
}

export default Component;
