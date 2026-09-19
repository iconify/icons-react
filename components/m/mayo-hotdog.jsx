import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a82xcdcpa.css';

const viewBox = {"width":352,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a82xcdcpa"/>`,
		"fallback": "ps:mayo-hotdog",
	});
}

export default Component;
