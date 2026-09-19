import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/osu8jdb9y.css';
import '../../css/m/mobnq65rh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="osu8jdb9y"/><path class="mobnq65rh"/></g>`,
		"fallback": "glyphs:sort-amount-up-duo",
	});
}

export default Component;
