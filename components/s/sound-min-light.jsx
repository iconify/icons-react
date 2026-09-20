import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/g/g2ejjjb6o.css';
import '../../css/d/d069zccvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="g2ejjjb6o"/><path class="d069zccvx"/></g>`,
		"fallback": "lets-icons:sound-min-light",
	});
}

export default Component;
