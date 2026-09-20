import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
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
		"content": `<g class="n1lsf0bnc"><path class="cgj8itb0a"/><path clip-rule="evenodd" class="uf_emnbje"/></g>`,
		"fallback": "thesvg:mastra",
	});
}

export default Component;
