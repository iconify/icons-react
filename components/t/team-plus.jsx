import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wedb-cbmi.css';
import '../../css/p/pqorn4b5k.css';
import '../../css/w/wx8o9908t.css';
import '../../css/y/y0qdzg8ij.css';
import '../../css/n/n25r4h2lp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wedb-cbmi"/><path class="pqorn4b5k"/><path class="wx8o9908t"/><path class="y0qdzg8ij"/><path class="n25r4h2lp"/></g>`,
		"fallback": "andrsrxn:team-plus",
	});
}

export default Component;
