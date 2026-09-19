import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1woo8b4z.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1woo8b4z"/>`,
		"fallback": "fa7-solid:user-cog",
	});
}

export default Component;
