import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oo1o-wb_v.css';
import '../../css/f/f-9kkmbuq.css';
import '../../css/x/x402yubhs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="oo1o-wb_v"/><path class="f-9kkmbuq"/><path class="x402yubhs"/></g>`,
		"fallback": "glyphs-poly:pennant-1",
	});
}

export default Component;
