import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t05232b2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t05232b2z"/>`,
		"fallback": "thesvg-color:rumble",
	});
}

export default Component;
