import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rdoq3cuij.css';
import '../../css/r/rtt1uzcet.css';
import '../../css/u/ud64ddcfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rdoq3cuij"/><path class="rtt1uzcet"/><path class="ud64ddcfa"/></g>`,
		"fallback": "andrsrxn:megaphone-off",
	});
}

export default Component;
