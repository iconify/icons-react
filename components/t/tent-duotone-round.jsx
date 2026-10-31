import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fhnj2iv1j.css';
import '../../css/b/blyjujmyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fhnj2iv1j"/><path class="blyjujmyc"/></g>`,
		"fallback": "coolicons:tent-duotone-round",
	});
}

export default Component;
