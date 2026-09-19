import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bf98f_bwj.css';
import '../../css/h/h58tt4bac.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bf98f_bwj"/><path class="h58tt4bac"/></g>`,
		"fallback": "glyphs:sort-size-up-1-outline",
	});
}

export default Component;
