import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh4r42bvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh4r42bvm"/>`,
		"fallback": "lucide:step-forward",
	});
}

export default Component;
