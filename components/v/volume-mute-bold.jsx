import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p67h9fzui.css';
import '../../css/x/x3ma9xbzh.css';
import '../../css/d/dkmidwbcl.css';
import '../../css/o/oa8805bxl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p67h9fzui"/><path class="x3ma9xbzh"/><path class="dkmidwbcl"/><path class="oa8805bxl"/></g>`,
		"fallback": "glyphs:volume-mute-bold",
	});
}

export default Component;
