import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2mr-w8gf.css';

const viewBox = {"width":833,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2mr-w8gf"/>`,
		"fallback": "whh:snowman",
	});
}

export default Component;
