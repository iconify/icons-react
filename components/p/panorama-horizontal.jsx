import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cw8y--b8n.css';
import '../../css/n/nrs6e1b7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cw8y--b8n"/><path class="nrs6e1b7c"/></g>`,
		"fallback": "tdesign:panorama-horizontal",
	});
}

export default Component;
