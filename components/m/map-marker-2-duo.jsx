import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jkte7ebxp.css';
import '../../css/n/nmbjg4b9a.css';
import '../../css/j/jreojobjh.css';
import '../../css/k/k1vam0gdh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jkte7ebxp"/><path class="nmbjg4b9a"/><path class="jreojobjh"/><path class="k1vam0gdh"/></g>`,
		"fallback": "glyphs:map-marker-2-duo",
	});
}

export default Component;
