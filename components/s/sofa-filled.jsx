import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tuqd59b2u.css';
import '../../css/k/k4-hxfybp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tuqd59b2u"/><path class="k4-hxfybp"/></g>`,
		"fallback": "reicon:sofa-filled",
	});
}

export default Component;
