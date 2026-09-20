import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb-8y7omu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb-8y7omu"/>`,
		"fallback": "thesvg:konami",
	});
}

export default Component;
