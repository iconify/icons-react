import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xgxs8rbcn.css';
import '../../css/t/t2982abjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xgxs8rbcn"/><path class="t2982abjv"/></g>`,
		"fallback": "si:pin-alt-2-duotone",
	});
}

export default Component;
