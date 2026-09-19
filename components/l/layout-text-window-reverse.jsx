import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ahujtfdin.css';
import '../../css/n/ncfwlubgi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ahujtfdin"/><path class="ncfwlubgi"/></g>`,
		"fallback": "bi:layout-text-window-reverse",
	});
}

export default Component;
