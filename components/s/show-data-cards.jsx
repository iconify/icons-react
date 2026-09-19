import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwzq6cb0f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwzq6cb0f"/>`,
		"fallback": "carbon:show-data-cards",
	});
}

export default Component;
