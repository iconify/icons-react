import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z4ni3-bvv.css';
import '../../css/a/amfm1tp9u.css';
import '../../css/e/ey_mdybwj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z4ni3-bvv"/><path class="amfm1tp9u"/><path class="ey_mdybwj"/></g>`,
		"fallback": "bi:server",
	});
}

export default Component;
