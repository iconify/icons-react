import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/rgoan7bpx.css';
import '../../css/u/us-phubsg.css';
import '../../css/h/hjlmgab0d.css';
import '../../css/d/dwdszko0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="rgoan7bpx"/><path class="us-phubsg"/><path class="hjlmgab0d"/><path class="dwdszko0m"/></g>`,
		"fallback": "matita:user-plus",
	});
}

export default Component;
