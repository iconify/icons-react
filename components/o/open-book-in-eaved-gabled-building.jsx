import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz70ulbwn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz70ulbwn"/>`,
		"fallback": "pinhead:open-book-in-eaved-gabled-building",
	});
}

export default Component;
