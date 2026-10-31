import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdor-wx8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdor-wx8e"/>`,
		"fallback": "coolicons:plus-minus-duotone-round",
	});
}

export default Component;
