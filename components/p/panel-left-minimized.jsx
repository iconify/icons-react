import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqr06mblf.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cvba9qpke.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGr9eWYbHE" class="iqr06mblf"/></defs><mask id="SVGvH4ZXd9x" class="cuyn6tgcc"><use href="#SVGr9eWYbHE"/></mask><g class="cuyn6tgcc"><use href="#SVGr9eWYbHE"/><path mask="url(#SVGvH4ZXd9x)" class="cvba9qpke"/></g>`,
		"fallback": "radix-icons:panel-left-minimized",
	});
}

export default Component;
