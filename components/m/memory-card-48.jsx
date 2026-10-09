import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi5qdgtra.css';
import '../../css/o/owfc160qg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi5qdgtra"/><path class="owfc160qg"/>`,
		"fallback": "energy-icons:memory-card-48",
	});
}

export default Component;
