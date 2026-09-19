import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md62t3byp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md62t3byp"/>`,
		"fallback": "heroicons-outline:presentation-chart-bar",
	});
}

export default Component;
