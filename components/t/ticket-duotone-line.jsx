import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/azmqy4_8y.css';
import '../../css/b/bczdprbwo.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8B0opepm"><g class="ft5dv1b6b"><path class="azmqy4_8y"/><path class="bczdprbwo"/></g></mask></defs><path mask="url(#SVG8B0opepm)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:ticket-duotone-line",
	});
}

export default Component;
