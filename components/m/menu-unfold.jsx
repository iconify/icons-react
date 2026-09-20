import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zkia9skgb.css';
import '../../css/u/uz6qwub-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zkia9skgb"/><path class="uz6qwub-f"/></g>`,
		"fallback": "tdesign:menu-unfold",
	});
}

export default Component;
