import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g-m-mfoau.css';
import '../../css/m/m8t5_1_lc.css';
import '../../css/x/xpcazhbkn.css';
import '../../css/m/m3dcrbb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><rect transform="rotate(-90 2 21)" class="g-m-mfoau"/><rect transform="rotate(-90 17 15.5)" class="m8t5_1_lc"/><rect transform="rotate(-90 2 10)" class="xpcazhbkn"/><path class="m3dcrbb4i"/></g>`,
		"fallback": "iconoir:network-left-solid",
	});
}

export default Component;
