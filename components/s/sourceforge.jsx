import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adfb9-j1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adfb9-j1g"/>`,
		"fallback": "thesvg-color:sourceforge",
	});
}

export default Component;
