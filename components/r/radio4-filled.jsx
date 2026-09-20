import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jvdymtpxs.css';
import '../../css/e/et73vjbtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jvdymtpxs"/><path class="et73vjbtq"/></g>`,
		"fallback": "reicon:radio4-filled",
	});
}

export default Component;
