import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jap6-8b4r.css';
import '../../css/u/u4iys0glr.css';
import '../../css/i/i7o6vnuwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jap6-8b4r"/><path clip-rule="evenodd" class="u4iys0glr"/><path clip-rule="evenodd" class="i7o6vnuwo"/></g>`,
		"fallback": "griddy-icons:rhino",
	});
}

export default Component;
