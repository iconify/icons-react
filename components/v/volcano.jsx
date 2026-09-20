import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e15fvxzdq.css';
import '../../css/o/o7q00bb7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e15fvxzdq"/><path class="o7q00bb7h"/></g>`,
		"fallback": "tabler:volcano",
	});
}

export default Component;
