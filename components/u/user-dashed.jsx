import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c3jzujlrk.css';
import '../../css/e/evm8hfb2r.css';
import '../../css/l/l0_6z9ble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c3jzujlrk"/><path class="evm8hfb2r"/><path class="l0_6z9ble"/></g>`,
		"fallback": "andrsrxn:user-dashed",
	});
}

export default Component;
