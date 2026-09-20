import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hofylubij.css';
import '../../css/x/xq1vpwbey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hofylubij"/><path clip-rule="evenodd" class="xq1vpwbey"/>`,
		"fallback": "lineicons:keyboard",
	});
}

export default Component;
