import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdrcr1l6s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdrcr1l6s"/>`,
		"fallback": "carbon:join-node",
	});
}

export default Component;
