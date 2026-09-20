import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h4k3maczi.css';
import '../../css/a/ar_nhpqsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h4k3maczi"/><path class="ar_nhpqsd"/></g>`,
		"fallback": "reicon:remote3",
	});
}

export default Component;
