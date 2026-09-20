import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uspk1ccev.css';
import '../../css/m/m4n2s7lvv.css';
import '../../css/n/nu5co54pd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uspk1ccev"/><path class="m4n2s7lvv"/><path class="nu5co54pd"/></g>`,
		"fallback": "mynaui:user-circle-solid",
	});
}

export default Component;
