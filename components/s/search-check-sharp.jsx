import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytr8o7b0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytr8o7b0k"/>`,
		"fallback": "keyline-icons:search-check-sharp",
	});
}

export default Component;
