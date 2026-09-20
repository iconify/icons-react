import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esv2gq_9i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esv2gq_9i"/>`,
		"fallback": "pinhead:motorcycle-and-locked-lock-with-keyhole",
	});
}

export default Component;
