import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng5reibrf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng5reibrf"/>`,
		"fallback": "selfhst:surveyjs-dark",
	});
}

export default Component;
