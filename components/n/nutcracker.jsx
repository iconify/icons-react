import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d6m0ygb_d.css';
import '../../css/e/eix4t5ldq.css';
import '../../css/g/gxc2-r5ol.css';
import '../../css/s/sq0dhbcwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="d6m0ygb_d wm-k"/><path class="eix4t5ldq wm-a"/><path class="gxc2-r5ol"/><path class="sq0dhbcwq"/></g>`,
		"fallback": "withicons-bauhaus:nutcracker",
	});
}

export default Component;
