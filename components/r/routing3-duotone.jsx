import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f_wlggf6j.css';
import '../../css/l/la4svweqi.css';
import '../../css/p/p74w0sexm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="f_wlggf6j"/><circle class="la4svweqi"/><path clip-rule="evenodd" class="p74w0sexm"/></g>`,
		"fallback": "reicon:routing3-duotone",
	});
}

export default Component;
