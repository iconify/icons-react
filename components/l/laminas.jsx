import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia59wicrb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia59wicrb"/>`,
		"fallback": "thesvg-color:laminas",
	});
}

export default Component;
