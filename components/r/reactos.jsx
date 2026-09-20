import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-sptnbyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-sptnbyi"/>`,
		"fallback": "simple-icons:reactos",
	});
}

export default Component;
