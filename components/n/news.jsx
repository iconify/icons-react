import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r3m61jblq.css';
import '../../css/i/ima3w_b1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r3m61jblq"/><path class="ima3w_b1c"/></g>`,
		"fallback": "hugeicons:news",
	});
}

export default Component;
