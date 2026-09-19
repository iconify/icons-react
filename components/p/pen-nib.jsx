import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xuu3suloh.css';
import '../../css/w/wtk3w1bri.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xuu3suloh"/><path class="wtk3w1bri"/></g>`,
		"fallback": "glyphs-poly:pen-nib",
	});
}

export default Component;
