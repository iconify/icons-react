import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ur1fz4ban.css';
import '../../css/u/u3mf8wblw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ur1fz4ban"/><path class="u3mf8wblw"/></g>`,
		"fallback": "solar:square-arrow-up-bold-duotone",
	});
}

export default Component;
