import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/szxsr-b0l.css';
import '../../css/b/bx0wdaclv.css';
import '../../css/y/y1_qhmb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="szxsr-b0l"/><path class="bx0wdaclv wm-a"/><path class="y1_qhmb2d"/></g>`,
		"fallback": "withicons:skip-back-duo",
	});
}

export default Component;
