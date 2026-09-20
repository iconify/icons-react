import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f05_twb2a.css';
import '../../css/v/vz8a4zt1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f05_twb2a"/><rect class="vz8a4zt1a"/></g>`,
		"fallback": "lets-icons:user-box-fill",
	});
}

export default Component;
