import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sn5p9bc_z.css';
import '../../css/g/gnhii6b1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="sn5p9bc_z"/><path class="gnhii6b1o"/></g>`,
		"fallback": "wordpress:lock",
	});
}

export default Component;
