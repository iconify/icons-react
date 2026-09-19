import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/zqf_yl-im.css';
import '../../css/u/umzj1472b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="zqf_yl-im"/><circle class="umzj1472b"/></g>`,
		"fallback": "iconamoon:notification-thin",
	});
}

export default Component;
