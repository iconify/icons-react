import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f9k35acuj.css';
import '../../css/b/brz6b8rhb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f9k35acuj"/><path clip-rule="evenodd" class="brz6b8rhb"/></g>`,
		"fallback": "heroicons-solid:search-circle",
	});
}

export default Component;
