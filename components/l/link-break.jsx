import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyj42ylez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyj42ylez"/>`,
		"fallback": "gridicons:link-break",
	});
}

export default Component;
