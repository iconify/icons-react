import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/rjbz5rbai.css';
import '../../css/o/o2zxpdeiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="rjbz5rbai"/><path class="o2zxpdeiy"/></g>`,
		"fallback": "keyline-icons:sparkle-sharp-two-tone",
	});
}

export default Component;
