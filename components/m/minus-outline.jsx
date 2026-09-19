import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di5cigt5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="minus-outline"><path class="Vector di5cigt5f" clip-rule="evenodd"/></g>`,
		"fallback": "cuida:minus-outline",
	});
}

export default Component;
