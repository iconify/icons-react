import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aaz641b-q.css';
import '../../css/i/i0wlbrb9z.css';
import '../../css/h/ho6q42b7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="aaz641b-q"/><rect class="i0wlbrb9z"/><path class="ho6q42b7r"/></g>`,
		"fallback": "andrsrxn:regex",
	});
}

export default Component;
