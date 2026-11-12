import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na6dr8byy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na6dr8byy"/>`,
		"fallback": "selfhst:surveyjs-light",
	});
}

export default Component;
