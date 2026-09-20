import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/ton5smgkd.css';
import '../../css/o/oi0lvgb3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ton5smgkd"/><path class="oi0lvgb3d"/></g>`,
		"fallback": "solar:moon-line-duotone",
	});
}

export default Component;
