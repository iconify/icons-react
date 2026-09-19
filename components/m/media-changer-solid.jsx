import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejr4_1b1c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejr4_1b1c"/>`,
		"fallback": "clarity:media-changer-solid",
	});
}

export default Component;
