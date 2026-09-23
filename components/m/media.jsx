import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z__sdlb9r.css';
import '../../css/p/p2sfcn0da.css';
import '../../css/g/gq_fd1b_x.css';
import '../../css/z/ze6cr1bxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="z__sdlb9r"/><circle vector-effect="non-scaling-stroke" class="p2sfcn0da"/><path vector-effect="non-scaling-stroke" class="gq_fd1b_x"/><path vector-effect="non-scaling-stroke" class="ze6cr1bxl"/></g>`,
		"fallback": "wordpress:media",
	});
}

export default Component;
