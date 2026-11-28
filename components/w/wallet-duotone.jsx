import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wv_h_4baa.css';
import '../../css/y/yt8lrmfaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary wv_h_4baa"/><path class="primary yt8lrmfaw"/></g>`,
		"fallback": "iconaut:wallet-duotone",
	});
}

export default Component;
