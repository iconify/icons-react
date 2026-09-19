import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yom9-8bmz.css';
import '../../css/o/occmn0cmv.css';
import '../../css/n/nut2xvvam.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="yom9-8bmz"/><path class="occmn0cmv"/><path class="nut2xvvam"/></g>`,
		"fallback": "glyphs:joker",
	});
}

export default Component;
