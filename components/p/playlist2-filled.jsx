import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nqg-zsbjx.css';
import '../../css/f/fddy-t7xs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nqg-zsbjx"/><path clip-rule="evenodd" class="fddy-t7xs"/></g>`,
		"fallback": "reicon:playlist2-filled",
	});
}

export default Component;
