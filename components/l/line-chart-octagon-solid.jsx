import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1hhj8bfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1hhj8bfn"/>`,
		"fallback": "mynaui:line-chart-octagon-solid",
	});
}

export default Component;
