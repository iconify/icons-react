import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e1csifshn.css';
import '../../css/z/zwqg48bgj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="e1csifshn"/><path class="zwqg48bgj"/></g>`,
		"fallback": "streamline-flex-color:stopwatch-flat",
	});
}

export default Component;
