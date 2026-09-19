import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mofzqg_pz.css';
import '../../css/h/hg52tlbcv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mofzqg_pz"/><path class="hg52tlbcv"/></g>`,
		"fallback": "glyphs-poly:send",
	});
}

export default Component;
