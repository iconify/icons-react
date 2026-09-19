import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r7zmk6dmj.css';
import '../../css/a/ae8_d9ber.css';
import '../../css/c/c4sbe-bgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r7zmk6dmj"/><path class="ae8_d9ber"/><path class="c4sbe-bgb"/></g>`,
		"fallback": "hugeicons:transaction",
	});
}

export default Component;
