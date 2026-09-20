import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/agkvw0bhq.css';
import '../../css/h/h6j440bgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="agkvw0bhq"/><path class="h6j440bgc"/></g>`,
		"fallback": "keyline-icons:paintbrush-sharp-two-tone",
	});
}

export default Component;
