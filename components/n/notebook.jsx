import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x9k4_7rlb.css';
import '../../css/z/zcju4pb8f.css';

const viewBox = {"width":27,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x9k4_7rlb"/><path class="zcju4pb8f"/></g>`,
		"fallback": "et:notebook",
	});
}

export default Component;
