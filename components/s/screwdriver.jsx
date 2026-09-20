import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fokf_m9cy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fokf_m9cy"/>`,
		"fallback": "vaadin:screwdriver",
	});
}

export default Component;
