import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xnrl5zb-x.css';
import '../../css/e/eho_n0s9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="xnrl5zb-x"/><path class="eho_n0s9c"/></g>`,
		"fallback": "withicons-bauhaus:link-2",
	});
}

export default Component;
