import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wta6cob2i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wta6cob2i"/>`,
		"fallback": "radix-icons:question-mark",
	});
}

export default Component;
