import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/p/p-73e3z9e.css';
import '../../css/q/q7jercbhh.css';
import '../../css/h/hzpl-vbrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="p-73e3z9e"/><path class="q7jercbhh"/><path class="hzpl-vbrj"/></g>`,
		"fallback": "hugeicons:target-03",
	});
}

export default Component;
