import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n10sul64d.css';
import '../../css/n/n_bx2obur.css';
import '../../css/p/psnkz2bcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="n10sul64d"/><path class="n_bx2obur wm-a"/><path class="psnkz2bcb"/></g>`,
		"fallback": "withicons:switch-camera-duo",
	});
}

export default Component;
