import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a70aibbjc.css';
import '../../css/f/f48qsgb5t.css';
import '../../css/y/yj_y3dp7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a70aibbjc"/><path class="f48qsgb5t wm-a"/><path class="yj_y3dp7d"/></g>`,
		"fallback": "withicons:vault-duo",
	});
}

export default Component;
