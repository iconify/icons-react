import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmqnm6b4s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmqnm6b4s"/>`,
		"fallback": "radix-icons:text-align-middle",
	});
}

export default Component;
