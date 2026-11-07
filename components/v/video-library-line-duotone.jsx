import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yh6hz8b9k.css';
import '../../css/a/as51hubfp.css';
import '../../css/h/h477q4bel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yh6hz8b9k"/><path class="as51hubfp"/><path class="h477q4bel"/></g>`,
		"fallback": "solar:video-library-line-duotone",
	});
}

export default Component;
