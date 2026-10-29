import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l14n7kb1k.css';
import '../../css/h/hj5pjd6bf.css';
import '../../css/d/d4uf2sbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l14n7kb1k"/><path class="hj5pjd6bf wm-a"/><path class="d4uf2sbry"/></g>`,
		"fallback": "withicons:network-duo",
	});
}

export default Component;
