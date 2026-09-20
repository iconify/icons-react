import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2ooaab7l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2ooaab7l"/>`,
		"fallback": "streamline-plump:warp-squeeze",
	});
}

export default Component;
