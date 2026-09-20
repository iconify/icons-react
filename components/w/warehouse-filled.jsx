import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w-_dadcqy.css';
import '../../css/d/dfgmwrrfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w-_dadcqy"/><path class="dfgmwrrfn"/></g>`,
		"fallback": "reicon:warehouse-filled",
	});
}

export default Component;
