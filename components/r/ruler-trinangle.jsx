import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uvcdgx14e.css';
import '../../css/j/jplez8box.css';
import '../../css/n/nc3sgkbcy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uvcdgx14e"/><path class="jplez8box"/><path class="nc3sgkbcy"/></g>`,
		"fallback": "glyphs-poly:ruler-trinangle",
	});
}

export default Component;
