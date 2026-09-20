import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_hxwwbci.css';
import '../../css/d/dpnipcczy.css';
import '../../css/s/sikeu93wb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_hxwwbci"/><path class="dpnipcczy"/><path class="sikeu93wb"/>`,
		"fallback": "tdesign:task-error-filled",
	});
}

export default Component;
