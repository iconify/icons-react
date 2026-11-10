import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x6vld7b9d.css';
import '../../css/k/k78zf2buj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x6vld7b9d"/><path class="k78zf2buj"/></g>`,
		"fallback": "andrsrxn:stand",
	});
}

export default Component;
