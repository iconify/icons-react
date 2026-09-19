import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2l13g56y.css';
import '../../css/y/yu9v0h85x.css';
import '../../css/i/i0e1ugb7u.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 995.638)"><path class="n2l13g56y"/><path class="yu9v0h85x"/><rect class="i0e1ugb7u"/></g>`,
		"fallback": "bpmn:subprocess-expanded",
	});
}

export default Component;
