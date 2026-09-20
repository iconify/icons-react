import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s79j0rq-x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s79j0rq-x"/>`,
		"fallback": "pinhead:l",
	});
}

export default Component;
