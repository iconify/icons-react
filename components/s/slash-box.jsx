import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qst5700gr.css';
import '../../css/v/vj51ctnko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="qst5700gr"/><path class="vj51ctnko"/></g>`,
		"fallback": "proicons:slash-box",
	});
}

export default Component;
