import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k4-hxfybp.css';
import '../../css/k/k6l6uvodt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k4-hxfybp"/><path class="k6l6uvodt"/></g>`,
		"fallback": "reicon:sofa-duotone",
	});
}

export default Component;
