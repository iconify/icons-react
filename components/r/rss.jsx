import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1ex4ob1q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1ex4ob1q"/>`,
		"fallback": "pinhead:rss",
	});
}

export default Component;
