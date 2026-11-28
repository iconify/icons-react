import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jnhr4sj6n.css';
import '../../css/y/y1fd7f-wn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jnhr4sj6n"/><path class="y1fd7f-wn"/></g>`,
		"fallback": "iconaut:printer-solid",
	});
}

export default Component;
