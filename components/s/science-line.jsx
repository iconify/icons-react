import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5sup4b7q.css';
import '../../css/z/zdaz92bkn.css';
import '../../css/h/hjjp08bah.css';
import '../../css/d/dkzppqpix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5sup4b7q"/><path class="zdaz92bkn"/><path class="hjjp08bah"/><path class="dkzppqpix"/>`,
		"fallback": "mingcute:science-line",
	});
}

export default Component;
