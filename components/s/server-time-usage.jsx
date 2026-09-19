import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj9vjz3-n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj9vjz3-n"/>`,
		"fallback": "carbon:server-time-usage",
	});
}

export default Component;
