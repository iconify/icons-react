import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai7m974dg.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lgb4f-pur.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGzlrrcbgz" class="ai7m974dg"/></defs><mask id="SVGoefgPbdu" class="cuyn6tgcc"><use href="#SVGzlrrcbgz"/></mask><g class="cuyn6tgcc"><use href="#SVGzlrrcbgz"/><path mask="url(#SVGoefgPbdu)" class="lgb4f-pur"/></g>`,
		"fallback": "radix-icons:panel-left",
	});
}

export default Component;
