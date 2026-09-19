import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btx1b7jeq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btx1b7jeq"/>`,
		"fallback": "ion:social-dribbble-outline",
	});
}

export default Component;
