import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e464tbczl.css';
import '../../css/g/gauj0qb7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="e464tbczl"/><path class="gauj0qb7w wm-a"/></g>`,
		"fallback": "withicons:share-2-solid",
	});
}

export default Component;
