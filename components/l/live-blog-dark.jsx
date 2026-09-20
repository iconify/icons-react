import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fui6c76in.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fui6c76in"/>`,
		"fallback": "selfhst:live-blog-dark",
	});
}

export default Component;
