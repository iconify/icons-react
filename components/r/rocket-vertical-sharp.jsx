import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/naqf3ti0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="naqf3ti0v"/>`,
		"fallback": "keyline-icons:rocket-vertical-sharp",
	});
}

export default Component;
