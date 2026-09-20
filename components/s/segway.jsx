import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c9-u-xb8e.css';
import '../../css/n/ni-43ubpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c9-u-xb8e"/><path class="ni-43ubpt"/></g>`,
		"fallback": "tabler:segway",
	});
}

export default Component;
