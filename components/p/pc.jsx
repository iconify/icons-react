import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_yfkbc0c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_yfkbc0c"/>`,
		"fallback": "bi:pc",
	});
}

export default Component;
