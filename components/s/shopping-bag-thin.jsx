import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/m9o65nmfm.css';
import '../../css/l/l-9noocio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="m9o65nmfm"/><path class="l-9noocio"/></g>`,
		"fallback": "iconamoon:shopping-bag-thin",
	});
}

export default Component;
