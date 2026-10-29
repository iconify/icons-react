import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ob5i9b1dp.css';
import '../../css/x/xz0z_ni8b.css';
import '../../css/c/c2tvjprfg.css';
import '../../css/f/fvbk-8bio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ob5i9b1dp"/><path class="xz0z_ni8b"/><path class="c2tvjprfg wm-a"/><path class="fvbk-8bio wm-s"/></g>`,
		"fallback": "withicons:paper-fan",
	});
}

export default Component;
