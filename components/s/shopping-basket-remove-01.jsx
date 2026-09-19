import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d324g8l5g.css';
import '../../css/i/i2aazebyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d324g8l5g"/><path class="i2aazebyv"/></g>`,
		"fallback": "hugeicons:shopping-basket-remove-01",
	});
}

export default Component;
