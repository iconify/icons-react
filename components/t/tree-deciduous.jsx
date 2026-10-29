import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nn7f_zb2c.css';
import '../../css/o/ovp7dlb_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="nn7f_zb2c"/><path class="ovp7dlb_x wm-a"/></g>`,
		"fallback": "withicons:tree-deciduous",
	});
}

export default Component;
