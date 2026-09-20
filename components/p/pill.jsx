import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zm_ki8omw.css';
import '../../css/g/g9xmp3kch.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zm_ki8omw"/><path class="g9xmp3kch"/></g>`,
		"fallback": "pepicons-pencil:pill",
	});
}

export default Component;
