import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ad_0h3wjz.css';
import '../../css/l/lqldgywfo.css';
import '../../css/y/yogfn1_7i.css';
import '../../css/l/ltkgk-xdn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ad_0h3wjz"/><path clip-rule="evenodd" class="lqldgywfo"/><path class="yogfn1_7i"/><path clip-rule="evenodd" class="ltkgk-xdn"/></g>`,
		"fallback": "glyphs:mobile-outline",
	});
}

export default Component;
