import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqp026biz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqp026biz"/>`,
		"fallback": "mdi:soy-sauce",
	});
}

export default Component;
