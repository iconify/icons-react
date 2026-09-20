import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gahmtubsr.css';
import '../../css/l/l_c9lcbrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gahmtubsr"/><path vector-effect="non-scaling-stroke" class="l_c9lcbrq"/></g>`,
		"fallback": "wordpress:pull-left",
	});
}

export default Component;
