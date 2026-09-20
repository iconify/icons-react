import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p9_fg8_7x.css';
import '../../css/k/kjijctboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p9_fg8_7x"/><path class="kjijctboc"/></g>`,
		"fallback": "reicon:star-duotone",
	});
}

export default Component;
