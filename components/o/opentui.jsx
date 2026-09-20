import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awy-u70-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awy-u70-l"/>`,
		"fallback": "thesvg-color:opentui",
	});
}

export default Component;
