import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lafhkbbho.css';
import '../../css/w/wqa4-ac6s.css';
import '../../css/w/w4vxnac6h.css';
import '../../css/p/pkx569b0p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lafhkbbho"/><path class="wqa4-ac6s"/><path class="w4vxnac6h"/><path class="pkx569b0p"/></g>`,
		"fallback": "glyphs:stop-circle-duo",
	});
}

export default Component;
