import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oykzfc_xp.css';
import '../../css/n/n-pc48b-w.css';
import '../../css/z/z4964bb0u.css';
import '../../css/r/re_v44b9s.css';
import '../../css/e/elygj73or.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oykzfc_xp"/><path class="n-pc48b-w"/><path class="z4964bb0u"/><path clip-rule="evenodd" class="re_v44b9s"/><path class="elygj73or"/></g>`,
		"fallback": "glyphs:landmark-bold",
	});
}

export default Component;
