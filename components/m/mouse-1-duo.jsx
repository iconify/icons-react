import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rnqb1u6-m.css';
import '../../css/w/w9l4spy6n.css';
import '../../css/e/eyibm5bwe.css';
import '../../css/u/uj50chxyr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rnqb1u6-m"/><path class="w9l4spy6n"/><path class="eyibm5bwe"/><path class="uj50chxyr"/></g>`,
		"fallback": "glyphs:mouse-1-duo",
	});
}

export default Component;
