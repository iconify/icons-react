import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yx8d6hbwn.css';
import '../../css/h/ht1fh8bab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yx8d6hbwn"/><path clip-rule="evenodd" class="ht1fh8bab"/></g>`,
		"fallback": "reicon:search-plus4",
	});
}

export default Component;
