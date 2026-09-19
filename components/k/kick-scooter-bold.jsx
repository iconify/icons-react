import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w9ol47byu.css';
import '../../css/n/n5-8jdgvs.css';
import '../../css/m/m7cme73nv.css';
import '../../css/j/j8qsfsb3d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w9ol47byu"/><path class="n5-8jdgvs"/><path class="m7cme73nv"/><path class="j8qsfsb3d"/></g>`,
		"fallback": "glyphs:kick-scooter-bold",
	});
}

export default Component;
