import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n13jb9w1u.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n13jb9w1u"/>`,
		"fallback": "picon:nfc",
	});
}

export default Component;
