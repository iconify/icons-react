import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isse66bow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isse66bow"/>`,
		"fallback": "thesvg-color:mediafire",
	});
}

export default Component;
