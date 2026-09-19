import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r1gcsvgqz.css';
import '../../css/m/m4eu39ble.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="r1gcsvgqz"/><path class="m4eu39ble"/></g>`,
		"fallback": "glyphs:scissors-open-1-outline",
	});
}

export default Component;
