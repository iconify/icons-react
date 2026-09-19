import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq4awzbeu.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq4awzbeu"/>`,
		"fallback": "icomoon-free:library",
	});
}

export default Component;
