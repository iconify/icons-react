import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ysayr_bws.css';
import '../../css/y/yqivewbwy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ysayr_bws"/><path class="yqivewbwy"/></g>`,
		"fallback": "glyphs:shopping-cart-duo",
	});
}

export default Component;
