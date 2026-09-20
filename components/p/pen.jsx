import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh6k4491x.css';

const viewBox = {"width":24,"height":24,"left":-2.5,"top":-3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh6k4491x"/>`,
		"fallback": "jam:pen",
	});
}

export default Component;
