import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a2-qnib1j.css';
import '../../css/g/gt5nbkbyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a2-qnib1j"/><path class="gt5nbkbyc"/></g>`,
		"fallback": "nrk:sign-language-expressive",
	});
}

export default Component;
