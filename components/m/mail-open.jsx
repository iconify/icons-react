import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/woun9fbuf.css';
import '../../css/l/lb3rsfbjt.css';
import '../../css/d/dy6wpbbqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="woun9fbuf"/><path class="lb3rsfbjt"/><path class="dy6wpbbqb"/></g>`,
		"fallback": "andrsrxn:mail-open",
	});
}

export default Component;
