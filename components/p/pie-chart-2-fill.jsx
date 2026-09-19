import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9srj5bbq.css';
import '../../css/w/w81_4cfys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9srj5bbq"/><path class="w81_4cfys"/>`,
		"fallback": "eva:pie-chart-2-fill",
	});
}

export default Component;
