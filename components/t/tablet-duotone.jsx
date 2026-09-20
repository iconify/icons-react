import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jnesoebcd.css';
import '../../css/e/e2lq9ac9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jnesoebcd"/><path class="e2lq9ac9f"/></g>`,
		"fallback": "reicon:tablet-duotone",
	});
}

export default Component;
