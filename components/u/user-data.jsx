import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1_a5hbgv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1_a5hbgv"/>`,
		"fallback": "carbon:user-data",
	});
}

export default Component;
