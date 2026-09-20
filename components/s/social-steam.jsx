import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n91xzbc8l.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n91xzbc8l"/>`,
		"fallback": "simple-line-icons:social-steam",
	});
}

export default Component;
