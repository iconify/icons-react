import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctrlet0df.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u_4xy8b8b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGXWFExeZn" class="ctrlet0df"/></defs><mask id="SVGqCX3GcaG" class="cuyn6tgcc"><use href="#SVGXWFExeZn"/></mask><g class="cuyn6tgcc"><use href="#SVGXWFExeZn"/><path mask="url(#SVGqCX3GcaG)" class="u_4xy8b8b"/></g>`,
		"fallback": "radix-icons:panel-right",
	});
}

export default Component;
