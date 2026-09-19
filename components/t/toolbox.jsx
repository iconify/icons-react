import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuf7-zbfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuf7-zbfa"/>`,
		"fallback": "hugeicons:toolbox",
	});
}

export default Component;
