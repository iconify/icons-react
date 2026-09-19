import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c-8fi9pzg.css';
import '../../css/r/r9uhtqbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c-8fi9pzg"/><path clip-rule="evenodd" class="r9uhtqbvc"/></g>`,
		"fallback": "gg:pin-alt",
	});
}

export default Component;
