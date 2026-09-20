import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg34m8bkr.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg34m8bkr"/>`,
		"fallback": "simple-line-icons:social-behance",
	});
}

export default Component;
