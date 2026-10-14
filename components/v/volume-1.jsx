import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/mldq_2-ju.css';
import '../../css/z/zrmwobb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="mldq_2-ju"/><path class="zrmwobb7b"/></g>`,
		"fallback": "matita:volume-1",
	});
}

export default Component;
