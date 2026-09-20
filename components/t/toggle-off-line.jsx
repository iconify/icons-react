import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_cyjh5hd.css';
import '../../css/r/r7zmfvpfr.css';
import '../../css/b/bh0se5bwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n_cyjh5hd"><path class="r7zmfvpfr"/><path class="bh0se5bwj"/></g>`,
		"fallback": "si:toggle-off-line",
	});
}

export default Component;
