import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u0_xuwxhf.css';
import '../../css/e/e4z8i4btu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="u0_xuwxhf"/><path class="e4z8i4btu"/></g>`,
		"fallback": "streamline-flex-color:magic-wand-1-flat",
	});
}

export default Component;
