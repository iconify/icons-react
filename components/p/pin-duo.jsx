import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m6ig356-n.css';
import '../../css/s/s9r27mstl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m6ig356-n"/><path class="s9r27mstl"/></g>`,
		"fallback": "glyphs:pin-duo",
	});
}

export default Component;
