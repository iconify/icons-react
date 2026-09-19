import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njfbj4esg.css';
import '../../css/d/dpptcnn_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njfbj4esg"/><path class="dpptcnn_b"/>`,
		"fallback": "boxicons:stopwatch",
	});
}

export default Component;
