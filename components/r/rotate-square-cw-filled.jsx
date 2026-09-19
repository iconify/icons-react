import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjw06qb5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjw06qb5y"/>`,
		"fallback": "boxicons:rotate-square-cw-filled",
	});
}

export default Component;
