import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oa9a2oboa.css';
import '../../css/z/zpu53zwhs.css';
import '../../css/l/l9lv5_bcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="oa9a2oboa"/><path class="wm-a zpu53zwhs"/><path class="l9lv5_bcf"/></g>`,
		"fallback": "withicons:scan-face-duo",
	});
}

export default Component;
