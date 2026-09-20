import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-4vguraq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-4vguraq"/>`,
		"fallback": "simple-line-icons:user-female",
	});
}

export default Component;
