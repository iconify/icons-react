import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sdtmd5blu.css';
import '../../css/c/cx1z4kzgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sdtmd5blu secondary"/><path class="cx1z4kzgf primary"/></g>`,
		"fallback": "iconaut:remote-duotone",
	});
}

export default Component;
