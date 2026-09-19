import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjyf8l7ig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjyf8l7ig"/>`,
		"fallback": "iconoir:panorama-enlarge",
	});
}

export default Component;
