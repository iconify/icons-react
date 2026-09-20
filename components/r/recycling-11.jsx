import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw-ghd7bo.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw-ghd7bo"/>`,
		"fallback": "maki:recycling-11",
	});
}

export default Component;
