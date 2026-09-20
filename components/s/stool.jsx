import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/l4rak7ahq.css';
import '../../css/u/u6j-mzbyg.css';
import '../../css/h/h3bkf6bec.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="l4rak7ahq"/><path class="u6j-mzbyg"/><path class="h3bkf6bec"/></g>`,
		"fallback": "streamline-plump-color:stool",
	});
}

export default Component;
