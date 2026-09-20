import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gsvot-8zy.css';
import '../../css/h/h6jwc3bpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gsvot-8zy"/><path class="h6jwc3bpm"/></g>`,
		"fallback": "reicon:list-check-duotone",
	});
}

export default Component;
