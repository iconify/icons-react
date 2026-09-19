import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lafhkbbho.css';
import '../../css/e/etbgu2b1p.css';
import '../../css/w/w4vxnac6h.css';
import '../../css/d/d6d0w5b6c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lafhkbbho"/><path class="etbgu2b1p"/><path class="w4vxnac6h"/><path class="d6d0w5b6c"/></g>`,
		"fallback": "glyphs:play-circle-duo",
	});
}

export default Component;
