import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bqvdxccrk.css';
import '../../css/e/erso_tb-d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bqvdxccrk"/><path class="erso_tb-d"/></g>`,
		"fallback": "streamline-color:necktie-flat",
	});
}

export default Component;
