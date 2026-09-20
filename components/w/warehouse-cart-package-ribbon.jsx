import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i7-47bb5x.css';
import '../../css/m/mk7315bgn.css';
import '../../css/y/y9j1-lx8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i7-47bb5x"/><path class="mk7315bgn"/><path class="y9j1-lx8b"/></g>`,
		"fallback": "streamline-ultimate:warehouse-cart-package-ribbon",
	});
}

export default Component;
