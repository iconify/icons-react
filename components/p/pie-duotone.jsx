import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hnd9u9bzd.css';
import '../../css/a/axz_vbcth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hnd9u9bzd"/><path class="axz_vbcth"/></g>`,
		"fallback": "reicon:pie-duotone",
	});
}

export default Component;
