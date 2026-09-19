import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wt3lnp3_y.css';
import '../../css/g/gnlke_a9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wt3lnp3_y"/><path class="gnlke_a9m"/></g>`,
		"fallback": "iconoir:paypal",
	});
}

export default Component;
