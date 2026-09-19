import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie6ox79cy.css';

const viewBox = {"width":350,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie6ox79cy"/>`,
		"fallback": "file-icons:scheme",
	});
}

export default Component;
