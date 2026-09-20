import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk0t-xb2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk0t-xb2u"/>`,
		"fallback": "mynaui:line-chart-diamond-solid",
	});
}

export default Component;
