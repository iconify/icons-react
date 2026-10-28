import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y3sneeo7h.css';
import '../../css/l/ln1m7wbqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y3sneeo7h"/><path class="ln1m7wbqj"/></g>`,
		"fallback": "andrsrxn:saturation",
	});
}

export default Component;
