import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/slc86ootb.css';
import '../../css/h/hqlqb8bfm.css';
import '../../css/b/bou945bat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="slc86ootb"/><path class="hqlqb8bfm wm-a"/><path class="bou945bat"/></g>`,
		"fallback": "withicons:trees-duo",
	});
}

export default Component;
