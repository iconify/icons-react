import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkjt7ccve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkjt7ccve"/>`,
		"fallback": "simple-icons:nintendo",
	});
}

export default Component;
