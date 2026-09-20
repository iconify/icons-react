import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tn7wo2bci.css';
import '../../css/u/ub6dgxt8m.css';
import '../../css/i/irtma8bnv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tn7wo2bci"/><path class="ub6dgxt8m"/><path class="irtma8bnv"/></g>`,
		"fallback": "pepicons-pencil:share-ios",
	});
}

export default Component;
