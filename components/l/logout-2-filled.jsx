import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h1ia8ibkd.css';
import '../../css/n/nmyzavb3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h1ia8ibkd"/><path class="nmyzavb3f"/></g>`,
		"fallback": "reicon:logout-2-filled",
	});
}

export default Component;
