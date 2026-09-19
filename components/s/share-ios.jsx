import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e8vs1tblt.css';
import '../../css/z/zi7afo3ec.css';
import '../../css/p/pbuz9tema.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e8vs1tblt"/><path class="zi7afo3ec"/><path class="pbuz9tema"/></g>`,
		"fallback": "pepicons:share-ios",
	});
}

export default Component;
