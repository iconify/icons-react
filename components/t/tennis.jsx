import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ax1-ht12b.css';
import '../../css/n/nnixupllg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ax1-ht12b"/><path class="nnixupllg wm-a"/></g>`,
		"fallback": "withicons:tennis",
	});
}

export default Component;
