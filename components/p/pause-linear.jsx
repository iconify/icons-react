import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k1g6vgbsl.css';
import '../../css/t/t1tvyzb2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k1g6vgbsl"/><path class="t1tvyzb2l"/></g>`,
		"fallback": "solar:pause-linear",
	});
}

export default Component;
