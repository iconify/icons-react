import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzvfwk-bk.css';
import '../../css/h/h4ybj2byr.css';
import '../../css/g/g5oaydb1l.css';
import '../../css/l/l3hk83q2i.css';

const viewBox = {"width":256,"height":213};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGe76EbcIH" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" class="gzvfwk-bk"/><stop offset="100%" class="h4ybj2byr"/></linearGradient></defs><path fill="url(#SVGe76EbcIH)" class="g5oaydb1l"/><path class="l3hk83q2i"/>`,
		"fallback": "thesvg-color:stability-ai",
	});
}

export default Component;
