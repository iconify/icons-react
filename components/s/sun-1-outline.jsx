import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/try1-1biq.css';
import '../../css/i/io3h1rboq.css';
import '../../css/v/v6uy02bwj.css';
import '../../css/y/ywoad4akh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="try1-1biq"/><path clip-rule="evenodd" class="io3h1rboq"/><path class="v6uy02bwj"/><path clip-rule="evenodd" class="ywoad4akh"/></g>`,
		"fallback": "glyphs:sun-1-outline",
	});
}

export default Component;
