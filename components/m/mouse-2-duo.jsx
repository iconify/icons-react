import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rnqb1u6-m.css';
import '../../css/f/fc2ihmivs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rnqb1u6-m"/><path class="fc2ihmivs"/></g>`,
		"fallback": "glyphs:mouse-2-duo",
	});
}

export default Component;
