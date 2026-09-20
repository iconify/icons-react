import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6sztackv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6sztackv"/>`,
		"fallback": "selfhst:web-check-dark",
	});
}

export default Component;
