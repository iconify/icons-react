import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pt-cw-lbj.css';
import '../../css/g/g2eyjabtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pt-cw-lbj"/><path class="g2eyjabtv"/></g>`,
		"fallback": "andrsrxn:unplug",
	});
}

export default Component;
