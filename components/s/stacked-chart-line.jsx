import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr_mfi-9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr_mfi-9z"/>`,
		"fallback": "ri:stacked-chart-line",
	});
}

export default Component;
