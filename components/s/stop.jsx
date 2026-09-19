import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3ks01b8e.css';

const viewBox = {"width":666,"height":680};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3ks01b8e"/>`,
		"fallback": "ls:stop",
	});
}

export default Component;
