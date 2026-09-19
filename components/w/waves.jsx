import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kfoxa_z9z.css';
import '../../css/k/kvdaehorh.css';
import '../../css/y/ydmyb5ahc.css';
import '../../css/s/s7ii38vjp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kfoxa_z9z"/><path class="kvdaehorh"/><path class="ydmyb5ahc"/><path class="s7ii38vjp"/></g>`,
		"fallback": "glyphs-poly:waves",
	});
}

export default Component;
