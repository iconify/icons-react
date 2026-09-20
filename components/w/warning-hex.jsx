import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s3i77ouuq.css';
import '../../css/w/wrt-x_0am.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(-1 -1)" class="bi12bsetm"><path class="s3i77ouuq"/><circle class="wrt-x_0am"/></g>`,
		"fallback": "system-uicons:warning-hex",
	});
}

export default Component;
