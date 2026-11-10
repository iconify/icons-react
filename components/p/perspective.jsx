import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h916cc1er.css';
import '../../css/h/hzgnb0b_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h916cc1er"/><path class="hzgnb0b_u"/></g>`,
		"fallback": "andrsrxn:perspective",
	});
}

export default Component;
