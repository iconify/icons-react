import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/il90q5pnk.css';
import '../../css/t/tey8c23jn.css';

const viewBox = {"width":227,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="il90q5pnk"/><path class="tey8c23jn"/></g>`,
		"fallback": "thesvg-color:nuxt-studio-dark",
	});
}

export default Component;
