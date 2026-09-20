import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c6eyhcbur.css';
import '../../css/k/k3n7tbc6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="c6eyhcbur"/><path class="k3n7tbc6x"/></g>`,
		"fallback": "wordpress:media-and-text",
	});
}

export default Component;
