import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/twame7b2s.css';
import '../../css/v/v1gvknjyb.css';
import '../../css/l/lff49dbib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="twame7b2s"/><path class="v1gvknjyb"/><path clip-rule="evenodd" class="lff49dbib"/></g>`,
		"fallback": "reicon:user-x2",
	});
}

export default Component;
