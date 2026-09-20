import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gl7pqnkcp.css';
import '../../css/g/g3h4cbcxf.css';
import '../../css/h/hrqgondkf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gl7pqnkcp"/><path class="g3h4cbcxf"/><path class="hrqgondkf"/></g>`,
		"fallback": "streamline-plump-color:politics-vote-2-flat",
	});
}

export default Component;
