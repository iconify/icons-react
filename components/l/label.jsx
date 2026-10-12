import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sqk7ozb8q.css';
import '../../css/b/bhk5crhwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sqk7ozb8q"/><path class="bhk5crhwj"/></g>`,
		"fallback": "andrsrxn:label",
	});
}

export default Component;
