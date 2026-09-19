import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nbbw91--j.css';
import '../../css/x/x9o2kxbxw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nbbw91--j"/><path class="x9o2kxbxw"/></g>`,
		"fallback": "healthicons:palliative-care-outline",
	});
}

export default Component;
