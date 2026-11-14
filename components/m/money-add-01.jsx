import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j3-denbmb.css';
import '../../css/i/ink891bfz.css';
import '../../css/y/y5c-b7h0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j3-denbmb"/><path class="ink891bfz"/><path class="y5c-b7h0b"/></g>`,
		"fallback": "hugeicons:money-add-01",
	});
}

export default Component;
