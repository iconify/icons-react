import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6ur09q4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6ur09q4u"/>`,
		"fallback": "thesvg:vbulletin",
	});
}

export default Component;
