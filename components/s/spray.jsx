import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ek6siccld.css';
import '../../css/o/o3x9u2bky.css';
import '../../css/l/lw0gi7b3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ek6siccld"/><path class="o3x9u2bky"/><path class="lw0gi7b3x"/></g>`,
		"fallback": "andrsrxn:spray",
	});
}

export default Component;
