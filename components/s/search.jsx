import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qlk5hfp7h.css';
import '../../css/j/jfw-fob7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qlk5hfp7h"/><path class="jfw-fob7x"/></g>`,
		"fallback": "tdesign:search",
	});
}

export default Component;
