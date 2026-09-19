import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzrn3sbqj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yzrn3sbqj"/>`,
		"fallback": "heroicons-solid:presentation-chart-bar",
	});
}

export default Component;
