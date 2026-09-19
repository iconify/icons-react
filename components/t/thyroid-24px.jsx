import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v2ao5kbow.css';
import '../../css/c/cjldzkb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v2ao5kbow"/><path clip-rule="evenodd" class="cjldzkb7f"/></g>`,
		"fallback": "healthicons:thyroid-24px",
	});
}

export default Component;
