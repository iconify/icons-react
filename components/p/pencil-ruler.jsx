import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzo83b3uj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzo83b3uj"/>`,
		"fallback": "keyline-icons:pencil-ruler",
	});
}

export default Component;
