import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ujc1b7xbx.css';
import '../../css/y/ya6yf3bzu.css';
import '../../css/x/xi5pfu1br.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ujc1b7xbx"/><path class="ya6yf3bzu"/><path clip-rule="evenodd" class="xi5pfu1br"/></g>`,
		"fallback": "reicon:user-ban",
	});
}

export default Component;
