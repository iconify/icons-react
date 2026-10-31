import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vxkd0ob2y.css';
import '../../css/y/yv_-r3b7m.css';
import '../../css/j/jr_wnwbql.css';
import '../../css/l/lz-ixv2jb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="vxkd0ob2y wm-shadow"/><path class="wm-shadow yv_-r3b7m"/><path class="jr_wnwbql"/><path class="lz-ixv2jb"/></g>`,
		"fallback": "withicons-brutal:replace",
	});
}

export default Component;
