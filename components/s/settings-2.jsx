import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z_7cu4y1d.css';
import '../../css/p/pam-70bus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k z_7cu4y1d"/><path class="pam-70bus wm-a"/></g>`,
		"fallback": "withicons-bauhaus:settings-2",
	});
}

export default Component;
