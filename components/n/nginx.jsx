import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfttfe_2y.css';
import '../../css/t/togmqd0vy.css';
import '../../css/r/rfctt0bky.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qfttfe_2y"><path class="togmqd0vy"/><path class="rfctt0bky"/></g>`,
		"fallback": "catppuccin:nginx",
	});
}

export default Component;
