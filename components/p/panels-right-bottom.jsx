import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-gr4qbdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-gr4qbdx"/>`,
		"fallback": "hugeicons:panels-right-bottom",
	});
}

export default Component;
