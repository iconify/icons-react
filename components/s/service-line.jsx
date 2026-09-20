import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tizcz3suw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tizcz3suw"/>`,
		"fallback": "ri:service-line",
	});
}

export default Component;
