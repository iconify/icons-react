import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ufju0yqly.css';
import '../../css/f/fs8eapbvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ufju0yqly"/><path class="fs8eapbvm"/></g>`,
		"fallback": "solar:phone-rounded-bold-duotone",
	});
}

export default Component;
