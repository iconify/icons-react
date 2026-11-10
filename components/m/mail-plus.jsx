import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qn95rwb8c.css';
import '../../css/z/zf5bh8bck.css';
import '../../css/f/fauxhqbxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qn95rwb8c"/><path class="zf5bh8bck"/><path class="fauxhqbxq"/></g>`,
		"fallback": "andrsrxn:mail-plus",
	});
}

export default Component;
