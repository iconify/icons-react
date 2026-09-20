import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov6hbkbhl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov6hbkbhl"/>`,
		"fallback": "pinhead:rounded-triangle-down-outline",
	});
}

export default Component;
