import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qrgc488qh.css';
import '../../css/p/ppgi3vj8t.css';
import '../../css/v/v2ukonb-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qrgc488qh"/><path class="ppgi3vj8t wm-a"/><path class="v2ukonb-w"/></g>`,
		"fallback": "withicons:map-pin-duo",
	});
}

export default Component;
