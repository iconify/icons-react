import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-ukvmn8c.css';
import '../../css/u/uru88vgdy.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h8diob_7p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGtsfrddUD" class="p-ukvmn8c"/><path id="SVGWfAUweeQ" class="uru88vgdy"/></defs><mask id="SVGCdFC4cgl" class="n1mjunbsu"><use href="#SVGtsfrddUD"/><use href="#SVGWfAUweeQ"/></mask><g class="cuyn6tgcc"><use href="#SVGtsfrddUD"/><use href="#SVGWfAUweeQ"/><path mask="url(#SVGCdFC4cgl)" class="h8diob_7p"/></g>`,
		"fallback": "fluent-emoji-high-contrast:sagittarius",
	});
}

export default Component;
