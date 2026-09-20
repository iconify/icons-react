import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cl37zwbap.css';
import '../../css/k/k-md4q7cr.css';
import '../../css/k/kmct9_bvp.css';
import '../../css/x/x5a__9b3n.css';
import '../../css/d/dmxbhfbcc.css';
import '../../css/r/rgv37rb7l.css';

const viewBox = {"width":150,"height":104};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cl37zwbap"/><path class="k-md4q7cr"/><path class="kmct9_bvp"/><path class="x5a__9b3n"/><path class="dmxbhfbcc"/><path class="rgv37rb7l"/></g>`,
		"fallback": "thesvg-color:mercado-libre",
	});
}

export default Component;
