import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xquo8mb1q.css';

const viewBox = {"width":1025,"height":961};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xquo8mb1q"/>`,
		"fallback": "whh:marker",
	});
}

export default Component;
