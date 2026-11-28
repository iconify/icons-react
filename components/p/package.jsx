import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxu7ywznh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxu7ywznh"/>`,
		"fallback": "noviair:package",
	});
}

export default Component;
