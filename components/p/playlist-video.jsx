import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a71b_4pwt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a71b_4pwt"/>`,
		"fallback": "dashicons:playlist-video",
	});
}

export default Component;
