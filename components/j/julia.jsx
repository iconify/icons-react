import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcbww2jsr.css';
import '../../css/r/r6n25fy6y.css';
import '../../css/o/oennkcb-z.css';
import '../../css/h/h75h-gbnl.css';
import '../../css/i/i9jeqqqyv.css';
import '../../css/u/ubk743bwn.css';

const viewBox = {"width":320,"height":200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dcbww2jsr"><path class="r6n25fy6y"/><path class="oennkcb-z"/><path class="h75h-gbnl"/><path class="i9jeqqqyv"/><path class="ubk743bwn"/></g>`,
		"fallback": "thesvg-color:julia",
	});
}

export default Component;
