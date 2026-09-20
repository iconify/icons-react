import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mupqp8cxu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mupqp8cxu"/>`,
		"fallback": "pinhead:rounded-triangle-right-outline",
	});
}

export default Component;
