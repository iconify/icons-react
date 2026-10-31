import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iinp6yb4a.css';
import '../../css/e/elb-1r-3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="iinp6yb4a"/><path class="elb-1r-3g"/></g>`,
		"fallback": "struq:send",
	});
}

export default Component;
