import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lif9qfbwj.css';
import '../../css/k/kwytqvbfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lif9qfbwj"/><path class="kwytqvbfs"/></g>`,
		"fallback": "reicon:qr-filled",
	});
}

export default Component;
