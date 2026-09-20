import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aahvg3b5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aahvg3b5v"/>`,
		"fallback": "ri:list-check",
	});
}

export default Component;
