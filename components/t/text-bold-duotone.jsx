import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hbk50ubmt.css';
import '../../css/c/ckdxye-zh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hbk50ubmt"/><path class="ckdxye-zh"/></g>`,
		"fallback": "reicon:text-bold-duotone",
	});
}

export default Component;
