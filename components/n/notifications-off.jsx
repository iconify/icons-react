import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krtwebc9r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="krtwebc9r"/>`,
		"fallback": "pajamas:notifications-off",
	});
}

export default Component;
