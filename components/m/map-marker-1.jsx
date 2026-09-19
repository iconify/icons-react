import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cerywbcfw.css';
import '../../css/n/nm5ghwbht.css';
import '../../css/h/hax6ymbgr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cerywbcfw"/><path class="nm5ghwbht"/><path class="hax6ymbgr"/></g>`,
		"fallback": "glyphs-poly:map-marker-1",
	});
}

export default Component;
