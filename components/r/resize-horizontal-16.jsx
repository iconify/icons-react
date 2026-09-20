import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0tpdz_cy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0tpdz_cy"/>`,
		"fallback": "qlementine-icons:resize-horizontal-16",
	});
}

export default Component;
