import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j34r2z7ha.css';
import '../../css/m/md286fbip.css';
import '../../css/d/dcus75b-b.css';
import '../../css/j/j11si0b3o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="j34r2z7ha"/><g class="md286fbip"><path class="dcus75b-b"/><path class="j11si0b3o"/></g></g>`,
		"fallback": "cryptocurrency-color:safe",
	});
}

export default Component;
