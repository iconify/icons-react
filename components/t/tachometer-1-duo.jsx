import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p8ebzs-6d.css';
import '../../css/m/mh2o3bcmq.css';
import '../../css/i/i4dttsb6v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p8ebzs-6d"/><path class="mh2o3bcmq"/><path class="i4dttsb6v"/></g>`,
		"fallback": "glyphs:tachometer-1-duo",
	});
}

export default Component;
