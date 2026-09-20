import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zvxrz6bfm.css';
import '../../css/n/ncgcfebjl.css';
import '../../css/t/tvn32_g5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zvxrz6bfm"/><path class="ncgcfebjl"/><path class="tvn32_g5p"/></g>`,
		"fallback": "reicon:user-tick",
	});
}

export default Component;
