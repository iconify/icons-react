import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui5tlxbrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui5tlxbrr"/>`,
		"fallback": "andrsrxn:text-heading-five",
	});
}

export default Component;
