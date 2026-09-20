import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vim18-bxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vim18-bxy"/>`,
		"fallback": "thesvg-color:protocolsdotio",
	});
}

export default Component;
