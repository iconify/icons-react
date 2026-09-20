import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q54u1pbba.css';
import '../../css/q/qtwmcobht.css';
import '../../css/p/p9ze6rn7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="q54u1pbba"/><path class="qtwmcobht"/><path vector-effect="non-scaling-stroke" class="p9ze6rn7i"/></g>`,
		"fallback": "wordpress:playlist",
	});
}

export default Component;
