import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mw1_gqpsk.css';
import '../../css/s/shupqpxva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mw1_gqpsk"/><path class="shupqpxva"/></g>`,
		"fallback": "hugeicons:spotlight",
	});
}

export default Component;
