import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kzqm9y_ar.css';
import '../../css/m/miaw0lbio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kzqm9y_ar"/><path class="miaw0lbio wm-a"/></g>`,
		"fallback": "withicons:pizza",
	});
}

export default Component;
