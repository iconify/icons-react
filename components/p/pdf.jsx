import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y9g_9mcrt.css';
import '../../css/m/myyd0ur6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y9g_9mcrt"/><path clip-rule="evenodd" class="myyd0ur6u"/></g>`,
		"fallback": "proicons:pdf",
	});
}

export default Component;
