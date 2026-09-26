import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a9vta4btl.css';
import '../../css/x/x51xzlbyy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a9vta4btl"/><path class="x51xzlbyy"/></g>`,
		"fallback": "at-icons:magic-staff",
	});
}

export default Component;
