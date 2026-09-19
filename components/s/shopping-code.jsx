import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzo8qqbnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzo8qqbnd"/>`,
		"fallback": "iconoir:shopping-code",
	});
}

export default Component;
