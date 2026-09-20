import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e5qkxdb4o.css';
import '../../css/e/ep28l9boi.css';
import '../../css/g/gt7rp6hyd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e5qkxdb4o"/><path class="ep28l9boi"/><path class="gt7rp6hyd"/></g>`,
		"fallback": "streamline-flex-color:missed-call",
	});
}

export default Component;
