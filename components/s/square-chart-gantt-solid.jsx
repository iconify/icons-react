import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4owt0n0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4owt0n0j"/>`,
		"fallback": "mynaui:square-chart-gantt-solid",
	});
}

export default Component;
