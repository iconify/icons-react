import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fffgk-bgb.css';
import '../../css/s/s88v5t7cy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fffgk-bgb"/><path class="s88v5t7cy"/>`,
		"fallback": "lucide-extended:sofa-filled",
	});
}

export default Component;
