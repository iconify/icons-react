import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4zs08s-q.css';
import '../../css/r/rhreihl6q.css';
import '../../css/w/w9ynz3w3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4zs08s-q"/><path class="rhreihl6q"/><path class="w9ynz3w3z"/></g>`,
		"fallback": "tdesign:logo-cinema4d",
	});
}

export default Component;
