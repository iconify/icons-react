import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f62h4o07s.css';
import '../../css/z/zyth7il_w.css';
import '../../css/b/baofe4k9o.css';

const viewBox = {"width":122,"height":18};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGVf6MUKlO)" class="f62h4o07s"/><defs><linearGradient id="SVGVf6MUKlO" x1="5.605" x2="17.15" y1="0" y2="22.618" gradientUnits="userSpaceOnUse"><stop class="zyth7il_w"/><stop offset="1" class="baofe4k9o"/></linearGradient></defs></g>`,
		"fallback": "thesvg-color:weaviate",
	});
}

export default Component;
