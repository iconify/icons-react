import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/poyc1firz.css';
import '../../css/r/rn9p1ts4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="poyc1firz"/><path class="rn9p1ts4c"/></g>`,
		"fallback": "solar:text-underline-line-duotone",
	});
}

export default Component;
