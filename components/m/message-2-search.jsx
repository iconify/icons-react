import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v7g6lqbxn.css';
import '../../css/f/fumudnnfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v7g6lqbxn"/><path class="fumudnnfx"/></g>`,
		"fallback": "tabler:message-2-search",
	});
}

export default Component;
