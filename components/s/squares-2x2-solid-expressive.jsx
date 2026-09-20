import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6og-9b-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6og-9b-g"/>`,
		"fallback": "nrk:squares-2x2-solid-expressive",
	});
}

export default Component;
