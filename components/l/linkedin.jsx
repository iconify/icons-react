import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu1u67bmt.css';

const viewBox = {"width":750,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eu1u67bmt"/>`,
		"fallback": "il:linkedin",
	});
}

export default Component;
