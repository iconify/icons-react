import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wht_zowdm.css';
import '../../css/z/zm38tmb2p.css';
import '../../css/b/buxga7syi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wht_zowdm"/><path class="wm-a zm38tmb2p"/><path class="buxga7syi"/></g>`,
		"fallback": "withicons:passport-duo",
	});
}

export default Component;
