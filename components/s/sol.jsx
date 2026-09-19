import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e-5_mqvfu.css';
import '../../css/i/ivq1wkb9r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="e-5_mqvfu"/><path class="ivq1wkb9r"/></g>`,
		"fallback": "cryptocurrency-color:sol",
	});
}

export default Component;
