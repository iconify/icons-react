import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c9bmclb1d.css';
import '../../css/t/tjswyhbej.css';
import '../../css/n/nje5g0bbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c9bmclb1d"/><path class="tjswyhbej"/><path class="nje5g0bbx"/></g>`,
		"fallback": "iconoir:multiple-pages",
	});
}

export default Component;
