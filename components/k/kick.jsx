import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrs1elb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrs1elb0i"/>`,
		"fallback": "bxl:kick",
	});
}

export default Component;
