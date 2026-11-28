import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cx-db_bvv.css';
import '../../css/r/re_xy969r.css';
import '../../css/o/o03gqvbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="cx-db_bvv"/><path class="re_xy969r"/><path class="o03gqvbuw"/></g>`,
		"fallback": "iconaut:triangle-alert",
	});
}

export default Component;
