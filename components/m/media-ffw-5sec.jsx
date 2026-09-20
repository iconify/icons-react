import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gwer_6vho.css';
import '../../css/m/msx6cub7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gwer_6vho"/><path class="msx6cub7v"/></g>`,
		"fallback": "nrk:media-ffw-5sec",
	});
}

export default Component;
