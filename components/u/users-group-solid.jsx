import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m2dj2acco.css';
import '../../css/s/sdfc-bh9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m2dj2acco"/><path class="sdfc-bh9f"/></g>`,
		"fallback": "mynaui:users-group-solid",
	});
}

export default Component;
