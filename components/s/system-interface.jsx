import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f68_n4bcj.css';
import '../../css/m/mp7nbmbcx.css';
import '../../css/m/m17qjo6op.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f68_n4bcj"/><path class="mp7nbmbcx"/><path class="m17qjo6op"/></g>`,
		"fallback": "tdesign:system-interface",
	});
}

export default Component;
