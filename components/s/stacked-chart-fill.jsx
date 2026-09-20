import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjy60jbob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjy60jbob"/>`,
		"fallback": "ri:stacked-chart-fill",
	});
}

export default Component;
