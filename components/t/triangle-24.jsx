import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmc9s-k4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmc9s-k4e"/>`,
		"fallback": "octicon:triangle-24",
	});
}

export default Component;
