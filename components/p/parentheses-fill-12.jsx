import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ico7ur4iz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ico7ur4iz"/>`,
		"fallback": "garden:parentheses-fill-12",
	});
}

export default Component;
