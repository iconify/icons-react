import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj5a1hovj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj5a1hovj"/>`,
		"fallback": "ri:service-bell-fill",
	});
}

export default Component;
