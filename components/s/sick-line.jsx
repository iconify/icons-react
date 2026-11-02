import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yohnb-boq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yohnb-boq"/>`,
		"fallback": "mingcute:sick-line",
	});
}

export default Component;
