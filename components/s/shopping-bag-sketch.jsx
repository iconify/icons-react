import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j44rrabxi.css';
import '../../css/k/kabwe8a7o.css';
import '../../css/r/rolrwhb8t.css';
import '../../css/s/saig0paye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="j44rrabxi"/><path class="kabwe8a7o wm-a"/><path class="rolrwhb8t wm-k"/><path class="saig0paye wm-a"/></g>`,
		"fallback": "withicons:shopping-bag-sketch",
	});
}

export default Component;
