import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxpqymarw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxpqymarw primary"/>`,
		"fallback": "iconaut:vector-skew-duotone",
	});
}

export default Component;
