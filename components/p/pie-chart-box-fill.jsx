import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xut_tgb0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xut_tgb0s"/>`,
		"fallback": "ri:pie-chart-box-fill",
	});
}

export default Component;
