import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ykp8htwkq.css';
import '../../css/b/bbwsckbod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="ykp8htwkq"/><path vector-effect="non-scaling-stroke" class="bbwsckbod"/></g>`,
		"fallback": "wordpress:pencil",
	});
}

export default Component;
