import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyrkxgbie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyrkxgbie"/>`,
		"fallback": "cbi:lift-in-window-open2",
	});
}

export default Component;
