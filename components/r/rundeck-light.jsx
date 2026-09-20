import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5277z8hv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5277z8hv"/>`,
		"fallback": "selfhst:rundeck-light",
	});
}

export default Component;
