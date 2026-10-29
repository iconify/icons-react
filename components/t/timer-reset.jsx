import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ii_vizbcn.css';
import '../../css/h/h6frekbjv.css';
import '../../css/z/ziiwmxdqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ii_vizbcn"/><path class="h6frekbjv"/><path class="ziiwmxdqf"/></g>`,
		"fallback": "withicons-bauhaus:timer-reset",
	});
}

export default Component;
