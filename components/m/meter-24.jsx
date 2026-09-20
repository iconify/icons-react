import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf03e1b1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf03e1b1g"/>`,
		"fallback": "octicon:meter-24",
	});
}

export default Component;
