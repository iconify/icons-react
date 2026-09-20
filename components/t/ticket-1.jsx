import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/i/iqkibacfe.css';
import '../../css/t/tnxdrzb7y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="iqkibacfe"/><path class="tnxdrzb7y"/></g>`,
		"fallback": "streamline-plump:ticket-1",
	});
}

export default Component;
