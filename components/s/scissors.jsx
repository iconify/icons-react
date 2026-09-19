import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/grmn0ni1j.css';
import '../../css/c/c7my2b2pg.css';
import '../../css/m/mgtat6why.css';
import '../../css/o/ophw_-baa.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="grmn0ni1j"/><path class="c7my2b2pg"/><path clip-rule="evenodd" class="mgtat6why"/><path class="ophw_-baa"/></g>`,
		"fallback": "glyphs-poly:scissors",
	});
}

export default Component;
