import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7m5bplhz.css';
import '../../css/q/q04q5tb9i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="a7m5bplhz"/><path class="q04q5tb9i"/></g>`,
		"fallback": "cryptocurrency-color:stox",
	});
}

export default Component;
