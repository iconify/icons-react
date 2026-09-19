import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/noe6dcchn.css';
import '../../css/l/lwz7_bbuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="noe6dcchn"/><path class="lwz7_bbuv"/></g>`,
		"fallback": "hugeicons:square-mouse-pointer",
	});
}

export default Component;
