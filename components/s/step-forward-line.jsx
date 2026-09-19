import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8k_ne4ni.css';
import '../../css/j/j9v9tkbrj.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8k_ne4ni clr-i-outline clr-i-outline-path-1"/><path class="clr-i-outline clr-i-outline-path-2 j9v9tkbrj"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:step-forward-line",
	});
}

export default Component;
