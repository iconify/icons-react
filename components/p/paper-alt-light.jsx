import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/v94z-_wrd.css';
import '../../css/a/a3jpjidwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="v94z-_wrd"/><path class="a3jpjidwv"/></g>`,
		"fallback": "lets-icons:paper-alt-light",
	});
}

export default Component;
