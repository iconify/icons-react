import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o54f7nakg.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o54f7nakg"/>`,
		"fallback": "lineicons:pointer-top",
	});
}

export default Component;
