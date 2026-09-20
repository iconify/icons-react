import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/wo0r7lm9u.css';
import '../../css/g/gy9n3pbyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="wo0r7lm9u"/><path class="gy9n3pbyo"/></g>`,
		"fallback": "keyline-icons:settings-dot-sharp-duotone",
	});
}

export default Component;
