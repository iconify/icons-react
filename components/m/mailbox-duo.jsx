import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r0ro9ykyt.css';
import '../../css/w/w_l8fwasu.css';
import '../../css/h/haf-s8w2i.css';
import '../../css/t/t48_nabfz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r0ro9ykyt"/><path class="w_l8fwasu"/><path class="haf-s8w2i"/><path class="t48_nabfz"/></g>`,
		"fallback": "glyphs:mailbox-duo",
	});
}

export default Component;
