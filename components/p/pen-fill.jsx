import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uasp36bmi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uasp36bmi"/>`,
		"fallback": "bi:pen-fill",
	});
}

export default Component;
