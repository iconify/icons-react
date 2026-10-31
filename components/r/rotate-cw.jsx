import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/ndjbzvb7j.css';
import '../../css/f/fjughibva.css';
import '../../css/s/sc2tvobjv.css';
import '../../css/p/pi5wsnb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ndjbzvb7j wm-shadow"/><path class="fjughibva wm-shadow"/><path class="sc2tvobjv"/><path class="pi5wsnb6v"/></g>`,
		"fallback": "withicons-brutal:rotate-cw",
	});
}

export default Component;
