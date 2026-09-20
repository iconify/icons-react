import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcso7vx-z.css';
import '../../css/f/f6wni1b_c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="gcso7vx-z"/><path class="f6wni1b_c"/>`,
		"fallback": "material-icon-theme:pytorch",
	});
}

export default Component;
