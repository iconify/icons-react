import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u3gpocbqz.css';
import '../../css/b/bfk955bbr.css';
import '../../css/d/dmivivbta.css';
import '../../css/i/icl286b5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u3gpocbqz"/><path class="bfk955bbr"/><path class="dmivivbta"/><path class="icl286b5s"/></g>`,
		"fallback": "reicon:skirt-duotone",
	});
}

export default Component;
