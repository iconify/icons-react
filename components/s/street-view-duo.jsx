import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rc_3vsnmc.css';
import '../../css/m/mspgd1bzj.css';
import '../../css/n/n72omlbua.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rc_3vsnmc"/><path class="mspgd1bzj"/><path class="n72omlbua"/></g>`,
		"fallback": "glyphs:street-view-duo",
	});
}

export default Component;
