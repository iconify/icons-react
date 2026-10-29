import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ih32s4bkl.css';
import '../../css/v/v1kfzlb7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ih32s4bkl"/><path class="v1kfzlb7a wm-a"/></g>`,
		"fallback": "withicons:link-duo",
	});
}

export default Component;
