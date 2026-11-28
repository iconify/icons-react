import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qs499mb3o.css';
import '../../css/t/tvdxs0bbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qs499mb3o secondary"/><path class="primary tvdxs0bbr"/></g>`,
		"fallback": "iconaut:pinecone-duotone",
	});
}

export default Component;
