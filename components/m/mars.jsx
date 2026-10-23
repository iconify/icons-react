import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/w0v5p4b8e.css';
import '../../css/v/vd7gt8b1z.css';
import '../../css/u/unie4db7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="w0v5p4b8e"/><path class="vd7gt8b1z"/><path class="unie4db7z"/></g>`,
		"fallback": "matita:mars",
	});
}

export default Component;
