import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htlye3b2q.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htlye3b2q"/>`,
		"fallback": "whh:squareheart",
	});
}

export default Component;
