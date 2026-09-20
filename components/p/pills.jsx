import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b_afwwbla.css';
import '../../css/a/ant4hoq0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b_afwwbla"/><path clip-rule="evenodd" class="ant4hoq0q"/></g>`,
		"fallback": "reicon:pills",
	});
}

export default Component;
