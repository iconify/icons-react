import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_cyjh5hd.css';
import '../../css/r/r7zmfvpfr.css';
import '../../css/c/c8fu6hbzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n_cyjh5hd"><path class="r7zmfvpfr"/><path class="c8fu6hbzt"/></g>`,
		"fallback": "si:toggle-on-line",
	});
}

export default Component;
