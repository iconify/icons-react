import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vf9p-qb1b.css';
import '../../css/f/f3km4hxoo.css';
import '../../css/p/pkwgfabuo.css';
import '../../css/j/j8dtcoztf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="vf9p-qb1b"/><circle class="f3km4hxoo"/><path class="pkwgfabuo"/><path class="j8dtcoztf"/></g>`,
		"fallback": "andrsrxn:walk",
	});
}

export default Component;
