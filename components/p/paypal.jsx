import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o7rwo4bzo.css';
import '../../css/a/av9mmacgv.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="o7rwo4bzo"/><path class="av9mmacgv"/></g>`,
		"fallback": "si-glyph:paypal",
	});
}

export default Component;
