import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c5u7aub0q.css';
import '../../css/u/u57inabcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c5u7aub0q"/><path class="u57inabcq"/></g>`,
		"fallback": "tabler:mood-cog",
	});
}

export default Component;
