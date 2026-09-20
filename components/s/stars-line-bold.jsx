import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ewnf0czgr.css';
import '../../css/x/x5d6pr60j.css';
import '../../css/e/ee75qzblf.css';
import '../../css/z/zxg-kkqlp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ewnf0czgr"/><path class="x5d6pr60j"/><path class="ee75qzblf"/><path class="zxg-kkqlp"/></g>`,
		"fallback": "solar:stars-line-bold",
	});
}

export default Component;
