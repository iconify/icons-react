import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/q/q7ytwq49i.css';
import '../../css/e/em-vuhbtk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="q7ytwq49i"/><path class="em-vuhbtk"/></g>`,
		"fallback": "lets-icons:road-finish-light",
	});
}

export default Component;
