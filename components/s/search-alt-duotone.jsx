import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q99l6ji5a.css';
import '../../css/e/ercgc7bbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q99l6ji5a"/><path class="ercgc7bbj"/></g>`,
		"fallback": "si:search-alt-duotone",
	});
}

export default Component;
