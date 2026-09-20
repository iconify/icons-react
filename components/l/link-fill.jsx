import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4xvnbb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4xvnbb6e"/>`,
		"fallback": "si:link-fill",
	});
}

export default Component;
