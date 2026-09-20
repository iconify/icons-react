import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upkk8ccad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upkk8ccad"/>`,
		"fallback": "keyline-icons:route-off",
	});
}

export default Component;
