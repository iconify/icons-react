import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zmjtzmxfv.css';
import '../../css/p/p3z-0bbyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zmjtzmxfv"/><path class="p3z-0bbyb"/></g>`,
		"fallback": "hugeicons:next-week",
	});
}

export default Component;
