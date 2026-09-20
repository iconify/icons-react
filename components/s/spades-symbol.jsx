import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s1im_p5nc.css';
import '../../css/r/rnctixvtm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s1im_p5nc"/><path class="rnctixvtm"/></g>`,
		"fallback": "streamline-color:spades-symbol",
	});
}

export default Component;
