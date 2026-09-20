import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq2klur4n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kq2klur4n"/>`,
		"fallback": "lsicon:right-align-outline",
	});
}

export default Component;
