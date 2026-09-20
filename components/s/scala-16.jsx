import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agm_q7boe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agm_q7boe"/>`,
		"fallback": "nonicons:scala-16",
	});
}

export default Component;
