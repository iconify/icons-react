import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4dnmpbrh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r4dnmpbrh"/>`,
		"fallback": "heroicons-solid:presentation-chart-line",
	});
}

export default Component;
