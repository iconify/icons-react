import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cbtuxmsrr.css';
import '../../css/i/ityykaczh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="cbtuxmsrr"/><path class="ityykaczh"/></g>`,
		"fallback": "cryptocurrency-color:tkn",
	});
}

export default Component;
