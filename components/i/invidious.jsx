import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh20bg4_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gh20bg4_s"/>`,
		"fallback": "thesvg:invidious",
	});
}

export default Component;
