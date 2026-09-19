import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hyq94m6zf.css';
import '../../css/c/csc995bru.css';
import '../../css/u/ujj4w6bfn.css';
import '../../css/u/uqeizhbpa.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hyq94m6zf"/><path class="csc995bru"/><path clip-rule="evenodd" class="ujj4w6bfn"/><path class="uqeizhbpa"/></g>`,
		"fallback": "glyphs:volume-mute-outline",
	});
}

export default Component;
