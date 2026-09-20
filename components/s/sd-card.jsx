import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/r/rbofx0baq.css';
import '../../css/d/d6jtgub7q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="rbofx0baq"/><path class="d6jtgub7q"/></g>`,
		"fallback": "streamline-plump-color:sd-card",
	});
}

export default Component;
