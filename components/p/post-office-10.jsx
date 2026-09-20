import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as1jbkb3n.css';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as1jbkb3n"/>`,
		"fallback": "osmic:post-office-10",
	});
}

export default Component;
