import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yrkzeibqe.css';
import '../../css/c/cde919bvv.css';
import '../../css/w/wrkfp4ybw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yrkzeibqe"/><path class="cde919bvv"/><path class="wrkfp4ybw"/></g>`,
		"fallback": "solar:smart-speaker-2-bold",
	});
}

export default Component;
