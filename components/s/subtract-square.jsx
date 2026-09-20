import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xmtootbsq.css';
import '../../css/q/qst5700gr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xmtootbsq"/><rect class="qst5700gr"/></g>`,
		"fallback": "proicons:subtract-square",
	});
}

export default Component;
