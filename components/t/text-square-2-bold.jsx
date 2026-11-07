import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulv-w-b-t.css';
import '../../css/m/m6ejkju0k.css';
import '../../css/m/mv3shgefo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ulv-w-b-t"/><path class="m6ejkju0k"/><path class="mv3shgefo"/>`,
		"fallback": "solar:text-square-2-bold",
	});
}

export default Component;
