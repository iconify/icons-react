import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_4p6yb3c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_4p6yb3c"/>`,
		"fallback": "icomoon-free:spinner5",
	});
}

export default Component;
