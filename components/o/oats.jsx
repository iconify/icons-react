import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8n-zhbeq.css';
import '../../css/s/s-dbhr51o.css';
import '../../css/b/b22a6_b3o.css';
import '../../css/r/rtmevac4x.css';
import '../../css/z/z483m4bel.css';
import '../../css/p/pud9qhl1x.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGpHYES6Ym" class="m8n-zhbeq"/></defs><g transform="rotate(14 -2208.7 1559.5)scale(2.0043)"><ellipse class="s-dbhr51o"/><ellipse class="b22a6_b3o"/><use href="#SVGpHYES6Ym"/></g><g transform="rotate(-12 3194.9 -3091.4)scale(2.0043)"><ellipse class="s-dbhr51o"/><ellipse class="b22a6_b3o"/><use href="#SVGpHYES6Ym"/></g><g transform="rotate(-6 3885.5 -4733.8)scale(2.0043)"><ellipse class="rtmevac4x"/><ellipse class="z483m4bel"/><path class="pud9qhl1x"/></g>`,
		"fallback": "iconito:oats",
	});
}

export default Component;
