import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y_v8h3okb.css';
import '../../css/i/ihj7zqbzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y_v8h3okb"/><path clip-rule="evenodd" class="ihj7zqbzl"/></g>`,
		"fallback": "andrsrxn:square-scan",
	});
}

export default Component;
