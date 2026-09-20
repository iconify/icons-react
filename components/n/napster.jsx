import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wm8drcgux.css';
import '../../css/k/ktaey57-j.css';
import '../../css/z/zrfexjbsf.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wm8drcgux"/><path class="ktaey57-j"/><path class="zrfexjbsf"/></g>`,
		"fallback": "jam:napster",
	});
}

export default Component;
