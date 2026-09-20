import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mm06y9blo.css';
import '../../css/v/vnxfpbb2u.css';
import '../../css/e/ez5yvcb0u.css';
import '../../css/u/u65-1ubal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mm06y9blo"/><path class="vnxfpbb2u"/><path class="ez5yvcb0u"/><path class="u65-1ubal"/></g>`,
		"fallback": "solar:sort-alphabetically-line-duotone",
	});
}

export default Component;
