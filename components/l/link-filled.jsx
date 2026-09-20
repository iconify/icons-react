import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm0xz1bkr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tm0xz1bkr"/>`,
		"fallback": "lsicon:link-filled",
	});
}

export default Component;
