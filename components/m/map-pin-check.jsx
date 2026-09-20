import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qpejv9b5c.css';
import '../../css/z/zv6cqnbnp.css';
import '../../css/u/ulq2j1bcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qpejv9b5c"/><circle class="zv6cqnbnp"/><path class="ulq2j1bcp"/></g>`,
		"fallback": "lucide:map-pin-check",
	});
}

export default Component;
