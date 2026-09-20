import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj930lbty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj930lbty"/>`,
		"fallback": "thesvg:udacity",
	});
}

export default Component;
