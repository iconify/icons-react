import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ysc8gh8-j.css';
import '../../css/m/mefg0obde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ysc8gh8-j"/><path class="mefg0obde"/></g>`,
		"fallback": "tabler:mickey",
	});
}

export default Component;
