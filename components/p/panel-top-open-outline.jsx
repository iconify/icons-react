import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zcpy6o_eo.css';
import '../../css/i/ime9nznuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zcpy6o_eo"/><path clip-rule="evenodd" class="ime9nznuo"/></g>`,
		"fallback": "solar:panel-top-open-outline",
	});
}

export default Component;
