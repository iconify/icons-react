import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je232-bwu.css';
import '../../css/r/r99ec1bho.css';
import '../../css/u/uok4llajp.css';
import '../../css/y/yg86et1yy.css';
import '../../css/v/v_3gpcb-j.css';
import '../../css/h/h5tv7s9lc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path fill="url(#SVGKOPoecok)" clip-rule="evenodd" class="je232-bwu"/><defs><linearGradient id="SVGKOPoecok" x1="24" x2="0" y1="0" y2="24" gradientUnits="userSpaceOnUse"><stop offset=".13" class="r99ec1bho"/><stop offset=".18" class="uok4llajp"/><stop offset=".338" class="yg86et1yy"/><stop offset=".666" class="yg86et1yy"/><stop offset=".809" class="v_3gpcb-j"/><stop offset=".858" class="h5tv7s9lc"/></linearGradient></defs>`,
		"fallback": "thesvg-color:metaai",
	});
}

export default Component;
