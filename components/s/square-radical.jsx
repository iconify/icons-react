import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g_dqx5jha.css';
import '../../css/y/yej4bsv4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="g_dqx5jha"/><path class="yej4bsv4p"/></g>`,
		"fallback": "hugeicons:square-radical",
	});
}

export default Component;
