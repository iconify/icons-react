import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fu2ooubtt.css';
import '../../css/m/m0sh7ccsz.css';
import '../../css/u/uvqytmbyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fu2ooubtt"/><path class="m0sh7ccsz"/><path class="uvqytmbyg"/></g>`,
		"fallback": "solar:panels-bottom-left-bold-duotone",
	});
}

export default Component;
