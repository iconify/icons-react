import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f01lhjzea.css';
import '../../css/k/k2jkwyg1s.css';
import '../../css/n/n7it1melf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="f01lhjzea"/><path clip-rule="evenodd" class="k2jkwyg1s"/><path class="n7it1melf"/></g>`,
		"fallback": "reicon:object-scan-filled",
	});
}

export default Component;
