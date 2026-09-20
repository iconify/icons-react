import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e_3yr7b2k.css';
import '../../css/m/mpi-5zbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e_3yr7b2k"/><path class="mpi-5zbkv"/></g>`,
		"fallback": "tdesign:pearl-of-the-orient",
	});
}

export default Component;
