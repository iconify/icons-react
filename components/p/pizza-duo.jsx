import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yt8n_ixwx.css';
import '../../css/m/miaw0lbio.css';
import '../../css/k/kzqm9y_ar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yt8n_ixwx"/><path class="miaw0lbio wm-a"/><path class="kzqm9y_ar"/></g>`,
		"fallback": "withicons:pizza-duo",
	});
}

export default Component;
