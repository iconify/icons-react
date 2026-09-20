import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wjgebtbst.css';
import '../../css/m/myatxhbsg.css';
import '../../css/o/ohv-qybzb.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1 3)" class="bi12bsetm"><path class="wjgebtbst"/><path class="myatxhbsg"/><rect class="ohv-qybzb"/></g>`,
		"fallback": "system-uicons:tags",
	});
}

export default Component;
