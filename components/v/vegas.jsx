import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x57bw-n-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x57bw-n-o"/>`,
		"fallback": "thesvg-color:vegas",
	});
}

export default Component;
