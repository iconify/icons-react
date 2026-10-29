import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z17j2_jat.css';
import '../../css/o/ovp7dlb_x.css';
import '../../css/n/nn7f_zb2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z17j2_jat"/><path class="ovp7dlb_x wm-a"/><path class="nn7f_zb2c"/></g>`,
		"fallback": "withicons:tree-deciduous-duo",
	});
}

export default Component;
