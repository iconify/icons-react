import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zwmoa0ifm.css';
import '../../css/n/nx8xvejqm.css';
import '../../css/f/f8v8n_bkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zwmoa0ifm"/><path class="nx8xvejqm"/><path class="f8v8n_bkf"/></g>`,
		"fallback": "andrsrxn:keyframes",
	});
}

export default Component;
