import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rmmn52b-w.css';
import '../../css/p/pqorn4b5k.css';
import '../../css/w/wx8o9908t.css';
import '../../css/y/y0qdzg8ij.css';
import '../../css/g/glv0skb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rmmn52b-w"/><path class="pqorn4b5k"/><path class="wx8o9908t"/><path class="y0qdzg8ij"/><path class="glv0skb5p"/></g>`,
		"fallback": "andrsrxn:team",
	});
}

export default Component;
