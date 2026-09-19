import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lcyom3b3c.css';
import '../../css/f/fiul8kc0i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="lcyom3b3c"/><path class="fiul8kc0i"/></g>`,
		"fallback": "cryptocurrency-color:oxt",
	});
}

export default Component;
