import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/az0dxebks.css';
import '../../css/n/nxcr2vf7w.css';
import '../../css/f/frl_qifow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="az0dxebks"/><path class="nxcr2vf7w"/><path class="frl_qifow"/></g>`,
		"fallback": "iconamoon:neutral-face-light",
	});
}

export default Component;
