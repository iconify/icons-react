import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lxq6z8b2b.css';
import '../../css/h/hzgd0t5wk.css';
import '../../css/a/aqwr5vbab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lxq6z8b2b"/><path class="hzgd0t5wk"/><path class="aqwr5vbab"/></g>`,
		"fallback": "andrsrxn:sun-snow",
	});
}

export default Component;
