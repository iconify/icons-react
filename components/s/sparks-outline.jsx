import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm0tk8bew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sparks-outline"><path class="Vector gm0tk8bew" clip-rule="evenodd"/></g>`,
		"fallback": "cuida:sparks-outline",
	});
}

export default Component;
