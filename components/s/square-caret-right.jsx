import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlvupyyyw.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlvupyyyw"/>`,
		"fallback": "fa6-regular:square-caret-right",
	});
}

export default Component;
