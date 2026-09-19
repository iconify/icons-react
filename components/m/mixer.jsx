import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rfguhzb-u.css';
import '../../css/n/ny4p4yuul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rfguhzb-u"/><path class="ny4p4yuul"/></g>`,
		"fallback": "hugeicons:mixer",
	});
}

export default Component;
