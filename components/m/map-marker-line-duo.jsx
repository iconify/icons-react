import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jkte7ebxp.css';
import '../../css/r/rt809ylhh.css';
import '../../css/x/x2dwaybup.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jkte7ebxp"/><path class="rt809ylhh"/><path class="x2dwaybup"/></g>`,
		"fallback": "glyphs:map-marker-line-duo",
	});
}

export default Component;
