import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kr9nmynla.css';
import '../../css/p/pcsn_fbse.css';
import '../../css/l/ldyoqd6ke.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kr9nmynla"/><path class="pcsn_fbse"/><path class="ldyoqd6ke"/></g>`,
		"fallback": "pepicons:soft-drink",
	});
}

export default Component;
