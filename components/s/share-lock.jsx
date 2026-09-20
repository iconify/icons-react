import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/tqp073bbf.css';
import '../../css/j/jgr5wab8a.css';
import '../../css/g/gvbb6yb_u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="tqp073bbf"/><path class="jgr5wab8a"/><path class="gvbb6yb_u"/></g>`,
		"fallback": "streamline-plump-color:share-lock",
	});
}

export default Component;
