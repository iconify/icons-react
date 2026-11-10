import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8286fbmk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w8286fbmk"/>`,
		"fallback": "sidekickicons:user-exclamation-16-solid",
	});
}

export default Component;
