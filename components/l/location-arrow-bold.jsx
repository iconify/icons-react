import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/inf_dyhyv.css';
import '../../css/c/c-447zyft.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="inf_dyhyv"/><path class="c-447zyft"/></g>`,
		"fallback": "glyphs:location-arrow-bold",
	});
}

export default Component;
