import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tdnuhobps.css';
import '../../css/y/yurfm-szm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tdnuhobps"/><path class="wm-a yurfm-szm"/></g>`,
		"fallback": "withicons:rocket-solid",
	});
}

export default Component;
