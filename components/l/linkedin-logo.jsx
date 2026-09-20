import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgblf3b3b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgblf3b3b"/>`,
		"fallback": "radix-icons:linkedin-logo",
	});
}

export default Component;
