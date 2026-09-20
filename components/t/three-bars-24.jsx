import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n154e6bda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n154e6bda"/>`,
		"fallback": "octicon:three-bars-24",
	});
}

export default Component;
