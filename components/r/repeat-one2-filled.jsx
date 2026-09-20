import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jgqufmb2u.css';
import '../../css/y/y3-k29bgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jgqufmb2u"/><path class="y3-k29bgy"/></g>`,
		"fallback": "reicon:repeat-one2-filled",
	});
}

export default Component;
