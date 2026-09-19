import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bemeq4bko.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bemeq4bko"/>`,
		"fallback": "ion:ios-refresh-empty",
	});
}

export default Component;
