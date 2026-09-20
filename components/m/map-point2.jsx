import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr5c3fmnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fr5c3fmnf"/>`,
		"fallback": "reicon:map-point2",
	});
}

export default Component;
