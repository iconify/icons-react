import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0lidos6q.css';
import '../../css/f/fokf_m9cy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0lidos6q"/><path class="fokf_m9cy"/>`,
		"fallback": "vaadin:tools",
	});
}

export default Component;
