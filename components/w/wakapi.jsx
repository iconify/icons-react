import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayy9uee8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayy9uee8v"/>`,
		"fallback": "cbi:wakapi",
	});
}

export default Component;
