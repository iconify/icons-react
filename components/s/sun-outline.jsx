import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/w/woqkurbrc.css';
import '../../css/u/uw8pkwb8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="woqkurbrc"/><path class="uw8pkwb8j"/></g>`,
		"fallback": "bitcoin-icons:sun-outline",
	});
}

export default Component;
