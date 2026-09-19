import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yiozq7bfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yiozq7bfv"/>`,
		"fallback": "griddy-icons:moon-alt",
	});
}

export default Component;
