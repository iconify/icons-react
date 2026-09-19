import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bvb_r06re.css';
import '../../css/e/eozy9wbxu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="bvb_r06re"/><path class="eozy9wbxu"/></g>`,
		"fallback": "cryptocurrency-color:rhoc",
	});
}

export default Component;
