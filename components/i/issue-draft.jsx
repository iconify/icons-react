import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5gnv6y7i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5gnv6y7i"/>`,
		"fallback": "codicon:issue-draft",
	});
}

export default Component;
