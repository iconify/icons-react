import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r2eku_qlj.css';
import '../../css/z/z8n9vbbir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r2eku_qlj"/><path class="z8n9vbbir"/></g>`,
		"fallback": "reicon:planet3-duotone",
	});
}

export default Component;
