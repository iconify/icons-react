import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xa2fntb1l.css';
import '../../css/c/cls4e_bhi.css';
import '../../css/y/ygox79bep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xa2fntb1l"/><path class="cls4e_bhi"/><circle class="ygox79bep"/></g>`,
		"fallback": "lets-icons:unlock-light",
	});
}

export default Component;
