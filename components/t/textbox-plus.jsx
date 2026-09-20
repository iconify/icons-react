import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h4ku5fvhp.css';
import '../../css/u/ukwryxb-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h4ku5fvhp"/><path clip-rule="evenodd" class="ukwryxb-c"/></g>`,
		"fallback": "majesticons:textbox-plus",
	});
}

export default Component;
