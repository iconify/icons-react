import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k5rguyb7k.css';
import '../../css/a/a8wfs5bsi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k5rguyb7k"/><path class="a8wfs5bsi"/></g>`,
		"fallback": "at-icons:sticker",
	});
}

export default Component;
