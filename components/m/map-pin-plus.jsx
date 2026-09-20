import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s72l8dw0c.css';
import '../../css/z/zv6cqnbnp.css';
import '../../css/i/ii4tpe1es.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s72l8dw0c"/><circle class="zv6cqnbnp"/><path class="ii4tpe1es"/></g>`,
		"fallback": "lucide:map-pin-plus",
	});
}

export default Component;
