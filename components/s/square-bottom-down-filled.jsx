import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o9jy89lgy.css';
import '../../css/j/jhlmx7f_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="o9jy89lgy"/><path class="jhlmx7f_e"/></g>`,
		"fallback": "reicon:square-bottom-down-filled",
	});
}

export default Component;
