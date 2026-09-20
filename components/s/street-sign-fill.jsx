import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poofeib8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="poofeib8c"/>`,
		"fallback": "si:street-sign-fill",
	});
}

export default Component;
