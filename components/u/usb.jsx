import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ugllttbdv.css';
import '../../css/g/gjvlc7bmb.css';
import '../../css/q/q7djz2pzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ugllttbdv"/><path class="gjvlc7bmb"/><path class="q7djz2pzw"/></g>`,
		"fallback": "andrsrxn:usb",
	});
}

export default Component;
