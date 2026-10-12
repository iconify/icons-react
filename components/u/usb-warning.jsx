import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ugllttbdv.css';
import '../../css/g/grr59qbyf.css';
import '../../css/p/p4v-tgbyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ugllttbdv"/><path class="grr59qbyf"/><path class="p4v-tgbyg"/></g>`,
		"fallback": "andrsrxn:usb-warning",
	});
}

export default Component;
