import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/en_6bob5x.css';
import '../../css/f/fg4s8lnfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="en_6bob5x"/><path class="fg4s8lnfo"/></g>`,
		"fallback": "solar:quote-line-duotone",
	});
}

export default Component;
