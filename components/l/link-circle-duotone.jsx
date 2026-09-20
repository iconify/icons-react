import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/twwywab3d.css';
import '../../css/b/byfkj2hti.css';
import '../../css/x/x3y2kyb0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="twwywab3d"/><path class="byfkj2hti"/><path class="x3y2kyb0c"/></g>`,
		"fallback": "reicon:link-circle-duotone",
	});
}

export default Component;
