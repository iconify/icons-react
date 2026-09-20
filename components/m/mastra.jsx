import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cgj8itb0a.css';
import '../../css/u/uf_emnbje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cgj8itb0a"/><path clip-rule="evenodd" class="uf_emnbje"/></g>`,
		"fallback": "thesvg-color:mastra",
	});
}

export default Component;
