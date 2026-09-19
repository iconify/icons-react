import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sgur_bq2l.css';
import '../../css/h/hlwh9rh4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sgur_bq2l"/><path class="hlwh9rh4y"/></g>`,
		"fallback": "hugeicons:water-energy",
	});
}

export default Component;
