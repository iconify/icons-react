import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/s6r85vb-g.css';
import '../../css/m/m4l-9ybuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="s6r85vb-g"/><circle class="m4l-9ybuj"/></g>`,
		"fallback": "lets-icons:video-light",
	});
}

export default Component;
