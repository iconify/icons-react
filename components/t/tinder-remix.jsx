import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsudz58qu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsudz58qu"/>`,
		"fallback": "streamline:tinder-remix",
	});
}

export default Component;
