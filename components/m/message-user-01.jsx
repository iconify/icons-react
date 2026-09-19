import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wgssgdcin.css';
import '../../css/i/i7yqh0b7c.css';
import '../../css/e/e1_julwfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wgssgdcin"/><path class="i7yqh0b7c"/><path class="e1_julwfp"/></g>`,
		"fallback": "hugeicons:message-user-01",
	});
}

export default Component;
