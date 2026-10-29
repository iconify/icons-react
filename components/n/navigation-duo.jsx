import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rb99euolt.css';
import '../../css/q/qbtperb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="rb99euolt"/><path class="qbtperb_f"/></g>`,
		"fallback": "withicons:navigation-duo",
	});
}

export default Component;
