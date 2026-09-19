import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd-v9xn1m.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd-v9xn1m"/>`,
		"fallback": "fa-solid:sad-tear",
	});
}

export default Component;
