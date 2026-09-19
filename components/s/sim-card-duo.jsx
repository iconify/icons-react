import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wfyy8ibeu.css';
import '../../css/h/h2_n6-bvy.css';
import '../../css/s/sm2rlob0q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wfyy8ibeu"/><path class="h2_n6-bvy"/><path class="sm2rlob0q"/></g>`,
		"fallback": "glyphs:sim-card-duo",
	});
}

export default Component;
