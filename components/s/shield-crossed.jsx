import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssm35ub4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssm35ub4y"/>`,
		"fallback": "mynaui:shield-crossed",
	});
}

export default Component;
