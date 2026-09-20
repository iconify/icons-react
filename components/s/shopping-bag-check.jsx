import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nap0jub9n.css';
import '../../css/d/dfhvb_bjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nap0jub9n"/><path class="dfhvb_bjh"/></g>`,
		"fallback": "tabler:shopping-bag-check",
	});
}

export default Component;
