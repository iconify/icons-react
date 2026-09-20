import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv8q9zall.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv8q9zall"/>`,
		"fallback": "pinhead:sea-lion",
	});
}

export default Component;
