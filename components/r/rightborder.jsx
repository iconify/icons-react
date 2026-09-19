import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en6iffg9j.css';

const viewBox = {"width":960,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en6iffg9j"/>`,
		"fallback": "whh:rightborder",
	});
}

export default Component;
