import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4u8pbwjc.css';
import '../../css/u/u0kbdhb5x.css';
import '../../css/c/ct3xegiqx.css';
import '../../css/k/kye4rabpo.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="x4u8pbwjc"><path class="u0kbdhb5x"/><path class="ct3xegiqx"/></g><path class="kye4rabpo"/>`,
		"fallback": "openmoji:trumpet",
	});
}

export default Component;
