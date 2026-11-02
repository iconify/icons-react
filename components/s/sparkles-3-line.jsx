import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x97mdbm0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x97mdbm0v"/>`,
		"fallback": "mingcute:sparkles-3-line",
	});
}

export default Component;
