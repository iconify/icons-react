import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pq6j9o11h.css';
import '../../css/c/czssrseqz.css';
import '../../css/s/ss0-xmbxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pq6j9o11h"/><path clip-rule="evenodd" class="czssrseqz"/><path class="ss0-xmbxt"/></g>`,
		"fallback": "reicon:tower",
	});
}

export default Component;
