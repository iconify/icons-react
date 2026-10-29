import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/by7lzdb6d.css';
import '../../css/i/i-148iksi.css';
import '../../css/g/gmx4ak5hr.css';
import '../../css/x/xj8yknp_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="by7lzdb6d wm-k"/><path class="i-148iksi wm-a"/><path class="gmx4ak5hr wm-k"/><path class="wm-a xj8yknp_a"/></g>`,
		"fallback": "withicons:utensils-sketch",
	});
}

export default Component;
