import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f9znvjmlg.css';
import '../../css/w/w65jbxezz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f9znvjmlg"/><path class="w65jbxezz"/></g>`,
		"fallback": "coolicons:panel-right-duotone-round",
	});
}

export default Component;
