import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywh_racvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywh_racvf"/>`,
		"fallback": "noviair-light:pie-chart-arrow-down",
	});
}

export default Component;
