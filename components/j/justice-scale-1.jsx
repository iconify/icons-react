import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/paxqtmbpi.css';
import '../../css/p/p2sicx9on.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="paxqtmbpi"/><path class="p2sicx9on"/></g>`,
		"fallback": "streamline-color:justice-scale-1",
	});
}

export default Component;
