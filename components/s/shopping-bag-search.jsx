import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fe2kg1trl.css';
import '../../css/i/i9pxxkb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fe2kg1trl"/><path class="i9pxxkb7c"/></g>`,
		"fallback": "tabler:shopping-bag-search",
	});
}

export default Component;
