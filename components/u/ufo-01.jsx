import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v70i-h9qh.css';
import '../../css/h/hvtj75jxc.css';
import '../../css/d/d72yro0mi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v70i-h9qh"/><path class="hvtj75jxc"/><path class="d72yro0mi"/></g>`,
		"fallback": "hugeicons:ufo-01",
	});
}

export default Component;
