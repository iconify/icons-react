import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rw5sjybfd.css';
import '../../css/h/hrnkpqm0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rw5sjybfd"/><path class="hrnkpqm0i"/></g>`,
		"fallback": "reicon:mouse-circle-duotone",
	});
}

export default Component;
