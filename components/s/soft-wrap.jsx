import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-r9ksb1u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x-r9ksb1u"/>`,
		"fallback": "pajamas:soft-wrap",
	});
}

export default Component;
