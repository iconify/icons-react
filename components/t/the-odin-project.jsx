import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in52ayi5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in52ayi5a"/>`,
		"fallback": "thesvg-color:the-odin-project",
	});
}

export default Component;
