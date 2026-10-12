import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n-1k60gen.css';
import '../../css/m/ma62c9bta.css';
import '../../css/z/zp8fjxjrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n-1k60gen"/><path class="ma62c9bta"/><rect transform="matrix(0 -1 -1 0 21.4 21.4)" class="zp8fjxjrj"/></g>`,
		"fallback": "andrsrxn:sparkle-square",
	});
}

export default Component;
