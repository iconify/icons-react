import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iijf-xhei.css';
import '../../css/f/fymhgdcpr.css';
import '../../css/z/z9921wm3q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iijf-xhei"/><path class="fymhgdcpr"/><path class="z9921wm3q"/></g>`,
		"fallback": "glyphs:microphone-2-duo",
	});
}

export default Component;
