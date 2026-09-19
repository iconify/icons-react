import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/fdlfa_9yz.css';
import '../../css/w/wumfu6ygf.css';
import '../../css/o/oen13xbcm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="fdlfa_9yz"/><path class="wumfu6ygf"/><path class="oen13xbcm"/></g>`,
		"fallback": "icon-park:socks",
	});
}

export default Component;
