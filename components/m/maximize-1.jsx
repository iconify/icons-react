import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-3r6qbax.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-3r6qbax"/>`,
		"fallback": "streamline-plump:maximize-1",
	});
}

export default Component;
