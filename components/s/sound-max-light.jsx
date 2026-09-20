import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/g/g2ejjjb6o.css';
import '../../css/e/edck7ubyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="g2ejjjb6o"/><path class="edck7ubyd"/></g>`,
		"fallback": "lets-icons:sound-max-light",
	});
}

export default Component;
