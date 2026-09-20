import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmu8so9_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmu8so9_q"/>`,
		"fallback": "mingcute:transfer-3-line",
	});
}

export default Component;
