import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2yhjhbml.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2yhjhbml"/>`,
		"fallback": "fa-solid:retweet",
	});
}

export default Component;
