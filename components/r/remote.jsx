import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wlrfrla8c.css';
import '../../css/z/z_rsq7q-q.css';
import '../../css/k/k8r60b5kl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wlrfrla8c"/><path class="z_rsq7q-q"/><path class="k8r60b5kl"/></g>`,
		"fallback": "iconaut:remote",
	});
}

export default Component;
