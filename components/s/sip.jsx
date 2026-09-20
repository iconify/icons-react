import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f5v0r7ble.css';
import '../../css/l/l-ohcb8tc.css';
import '../../css/w/wbx9gobfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f5v0r7ble"/><path class="l-ohcb8tc"/><path class="wbx9gobfg"/></g>`,
		"fallback": "tdesign:sip",
	});
}

export default Component;
