import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g95ndgrnv.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nkc4t8bfx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGpPI6ccam" class="g95ndgrnv"/></defs><mask id="SVGVEeC1biv" class="cuyn6tgcc"><use href="#SVGpPI6ccam"/></mask><g class="cuyn6tgcc"><use href="#SVGpPI6ccam"/><path mask="url(#SVGVEeC1biv)" class="nkc4t8bfx"/></g>`,
		"fallback": "radix-icons:panel-bottom",
	});
}

export default Component;
