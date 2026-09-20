import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yovjb0bph.css';
import '../../css/l/l-xe7gbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yovjb0bph"/><path class="l-xe7gbgo"/></g>`,
		"fallback": "tabler:lock-plus",
	});
}

export default Component;
