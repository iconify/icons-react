import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j2d44u3bq.css';
import '../../css/o/ohgottb8e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="j2d44u3bq"/><path class="ohgottb8e"/></g>`,
		"fallback": "cryptocurrency-color:sib",
	});
}

export default Component;
