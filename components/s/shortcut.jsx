import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz17t_8qe.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz17t_8qe"/>`,
		"fallback": "whh:shortcut",
	});
}

export default Component;
