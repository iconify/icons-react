import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgcif9d1i.css';
import '../../css/w/wsl_n0boy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgcif9d1i"/><path class="wsl_n0boy"/>`,
		"fallback": "mingcute:music-3-fill",
	});
}

export default Component;
