import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sgex78bhw.css';
import '../../css/p/pjance51f.css';
import '../../css/h/hvy19cb7c.css';
import '../../css/r/r_0yv_v8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="notification-bell-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="sgex78bhw"/><path clip-rule="evenodd" class="pjance51f"/><path class="hvy19cb7c"/><path clip-rule="evenodd" class="r_0yv_v8w"/></g></g>`,
		"fallback": "cuida:notification-bell-outline",
	});
}

export default Component;
