import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtjok5b9s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtjok5b9s"/>`,
		"fallback": "radix-icons:triangle-up",
	});
}

export default Component;
