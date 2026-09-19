import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fo6abg74g.css';
import '../../css/u/um2lrkbcl.css';
import '../../css/e/eszr3ewht.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fo6abg74g"/><path clip-rule="evenodd" class="um2lrkbcl"/><path class="eszr3ewht"/></g>`,
		"fallback": "glyphs:shoe-print-bold",
	});
}

export default Component;
