import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ya1v57a8r.css';
import '../../css/y/yf6askbee.css';
import '../../css/g/gwga84g0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ya1v57a8r"/><path class="yf6askbee"/><path class="gwga84g0g"/></g>`,
		"fallback": "withicons-bauhaus:sandwich",
	});
}

export default Component;
