import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oc5e6w5wm.css';
import '../../css/p/pkf80pb7p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oc5e6w5wm"/><path class="pkf80pb7p"/></g>`,
		"fallback": "glyphs:volume-mute-duo",
	});
}

export default Component;
