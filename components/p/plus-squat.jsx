import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7fbeus2e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7fbeus2e"/>`,
		"fallback": "pinhead:plus-squat",
	});
}

export default Component;
