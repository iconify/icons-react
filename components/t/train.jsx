import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z0bens7ph.css';
import '../../css/z/z-36zwbfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z0bens7ph"/><path class="z-36zwbfv"/></g>`,
		"fallback": "andrsrxn:train",
	});
}

export default Component;
