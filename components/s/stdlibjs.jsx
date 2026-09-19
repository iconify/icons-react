import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei5tqekdn.css';

const viewBox = {"width":460,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei5tqekdn"/>`,
		"fallback": "file-icons:stdlibjs",
	});
}

export default Component;
