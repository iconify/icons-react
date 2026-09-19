import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2916b24e.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2916b24e"/>`,
		"fallback": "whh:treethree",
	});
}

export default Component;
