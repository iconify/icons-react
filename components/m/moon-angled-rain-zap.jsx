import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/o606-ib_i.css';
import '../../css/q/qfaskacss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="o606-ib_i"/><path class="qfaskacss"/></g>`,
		"fallback": "hugeicons:moon-angled-rain-zap",
	});
}

export default Component;
