import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hgu2a9bpl.css';
import '../../css/j/j_-u52b2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hgu2a9bpl"/><path class="j_-u52b2h"/></g>`,
		"fallback": "keyline-icons:skip-back-sharp-two-tone",
	});
}

export default Component;
