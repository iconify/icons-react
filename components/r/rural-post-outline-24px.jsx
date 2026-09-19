import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wu4mh-bky.css';
import '../../css/k/kwzthjhqj.css';
import '../../css/y/ya16kgbml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wu4mh-bky"/><path clip-rule="evenodd" class="kwzthjhqj"/><path class="ya16kgbml"/></g>`,
		"fallback": "healthicons:rural-post-outline-24px",
	});
}

export default Component;
