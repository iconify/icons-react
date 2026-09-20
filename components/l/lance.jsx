import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct_ba7b1w.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct_ba7b1w"/>`,
		"fallback": "memory:lance",
	});
}

export default Component;
