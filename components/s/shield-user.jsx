import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ezzhmbj5r.css';
import '../../css/y/yfymg5b-i.css';
import '../../css/r/rus9pebka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ezzhmbj5r"/><path class="yfymg5b-i"/><circle class="rus9pebka"/></g>`,
		"fallback": "lucide:shield-user",
	});
}

export default Component;
