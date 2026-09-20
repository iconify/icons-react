import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-_1ozgrf.css';
import '../../css/n/ni6lcyb1p.css';
import '../../css/x/xiieusbjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u-_1ozgrf"/><path class="ni6lcyb1p"/><path class="xiieusbjq"/></g>`,
		"fallback": "reicon:square-arrows-right-duotone",
	});
}

export default Component;
