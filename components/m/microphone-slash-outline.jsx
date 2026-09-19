import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtp65fvxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtp65fvxt"/>`,
		"fallback": "flowbite:microphone-slash-outline",
	});
}

export default Component;
