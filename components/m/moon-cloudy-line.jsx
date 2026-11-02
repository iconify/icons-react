import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el-0wrg4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el-0wrg4w"/>`,
		"fallback": "mingcute:moon-cloudy-line",
	});
}

export default Component;
