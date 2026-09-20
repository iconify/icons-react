import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l178v9utf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l178v9utf"/>`,
		"fallback": "mynaui:tv",
	});
}

export default Component;
