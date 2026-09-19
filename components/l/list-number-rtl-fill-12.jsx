import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdh42-b7n.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdh42-b7n"/>`,
		"fallback": "garden:list-number-rtl-fill-12",
	});
}

export default Component;
