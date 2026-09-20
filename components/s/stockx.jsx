import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpk5e57dj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpk5e57dj"/>`,
		"fallback": "thesvg-color:stockx",
	});
}

export default Component;
