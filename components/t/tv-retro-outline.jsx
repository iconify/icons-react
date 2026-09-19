import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sv_9e_bmt.css';
import '../../css/d/deafncc0t.css';
import '../../css/d/duhkb9blp.css';
import '../../css/n/nop9siewt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sv_9e_bmt"/><path class="deafncc0t"/><path class="duhkb9blp"/><path class="nop9siewt"/></g>`,
		"fallback": "glyphs:tv-retro-outline",
	});
}

export default Component;
