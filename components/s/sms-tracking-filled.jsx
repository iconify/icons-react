import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ueeo_tcgu.css';
import '../../css/c/c-ni-2rbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ueeo_tcgu"/><path class="c-ni-2rbp"/></g>`,
		"fallback": "reicon:sms-tracking-filled",
	});
}

export default Component;
