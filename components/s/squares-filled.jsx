import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kvn3d2vll.css';
import '../../css/a/ak51bicdp.css';
import '../../css/a/asmo-1zgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kvn3d2vll"/><path class="ak51bicdp"/><path class="asmo-1zgb"/></g>`,
		"fallback": "reicon:squares-filled",
	});
}

export default Component;
