import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0zdtu_0i.css';
import '../../css/m/msaduhb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t0zdtu_0i"/><path class="msaduhb3n"/></g>`,
		"fallback": "andrsrxn:train-track",
	});
}

export default Component;
