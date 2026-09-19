import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0ory7bry.css';

const viewBox = {"width":680,"height":661};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0ory7bry"/>`,
		"fallback": "ls:sitemap",
	});
}

export default Component;
