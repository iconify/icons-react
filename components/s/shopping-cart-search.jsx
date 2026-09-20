import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w34osu__y.css';
import '../../css/g/g2_e28gxf.css';
import '../../css/f/fa-71jbep.css';
import '../../css/i/i8a_669nn.css';
import '../../css/d/d0wy8umck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="w34osu__y"><path class="g2_e28gxf"/><path class="fa-71jbep"/><path class="i8a_669nn"/><path class="d0wy8umck"/></g>`,
		"fallback": "streamline-cyber:shopping-cart-search",
	});
}

export default Component;
