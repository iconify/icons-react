import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gvj669z4w.css';
import '../../css/z/z3exurbqq.css';
import '../../css/r/r6k04cbja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gvj669z4w"/><path class="z3exurbqq"/><circle class="r6k04cbja"/></g>`,
		"fallback": "hugeicons:laugh",
	});
}

export default Component;
