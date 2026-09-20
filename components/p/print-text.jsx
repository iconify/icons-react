import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u2puw4bdi.css';
import '../../css/q/qadrl-bqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u2puw4bdi"/><path class="qadrl-bqh"/></g>`,
		"fallback": "streamline-ultimate:print-text",
	});
}

export default Component;
