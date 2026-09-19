import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjud3gb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjud3gb-i"/>`,
		"fallback": "guidance:refill-for-water-bottle",
	});
}

export default Component;
