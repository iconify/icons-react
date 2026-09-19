import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ef2n8rbvn.css';
import '../../css/t/t6peypblt.css';
import '../../css/v/v53ihtb3e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ef2n8rbvn"/><path class="t6peypblt"/><path class="v53ihtb3e"/></g>`,
		"fallback": "glyphs:timer-2-bold",
	});
}

export default Component;
