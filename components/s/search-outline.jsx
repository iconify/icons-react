import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gy0hhmbpl.css';
import '../../css/n/nbs7yyb7p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gy0hhmbpl"/><path class="nbs7yyb7p"/></g>`,
		"fallback": "glyphs:search-outline",
	});
}

export default Component;
