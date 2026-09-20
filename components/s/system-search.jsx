import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7zjugcul.css';
import '../../css/c/cmc75nruz.css';
import '../../css/m/mrwl3hh9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y7zjugcul"/><path class="cmc75nruz"/><path class="mrwl3hh9l"/></g>`,
		"fallback": "tdesign:system-search",
	});
}

export default Component;
