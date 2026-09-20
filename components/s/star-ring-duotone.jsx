import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yc8-c9bpp.css';
import '../../css/c/cwaizvbwy.css';
import '../../css/e/e6oycrkvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yc8-c9bpp"/><path class="cwaizvbwy"/><path class="e6oycrkvo"/></g>`,
		"fallback": "reicon:star-ring-duotone",
	});
}

export default Component;
