import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u7sy6cpqd.css';
import '../../css/f/ftxazkb0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u7sy6cpqd"/><path class="ftxazkb0h"/></g>`,
		"fallback": "tabler:lock-spark",
	});
}

export default Component;
