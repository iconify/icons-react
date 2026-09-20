import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/drf1s2bhc.css';
import '../../css/n/nf1iidswc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="drf1s2bhc"/><path class="nf1iidswc"/></g>`,
		"fallback": "streamline-ultimate:time-clock-hand-1",
	});
}

export default Component;
