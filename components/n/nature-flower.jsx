import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq81fbbqr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kq81fbbqr"/>`,
		"fallback": "streamline-block:nature-flower",
	});
}

export default Component;
