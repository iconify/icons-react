import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymr-83eum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymr-83eum"/>`,
		"fallback": "noviair-light:popcorn",
	});
}

export default Component;
