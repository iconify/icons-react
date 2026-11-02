import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbf7qdnvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbf7qdnvi"/>`,
		"fallback": "mingcute:rare-fog-lights-line",
	});
}

export default Component;
