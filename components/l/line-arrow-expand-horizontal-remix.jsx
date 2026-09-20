import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pupptx3cs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pupptx3cs"/>`,
		"fallback": "streamline-plump:line-arrow-expand-horizontal-remix",
	});
}

export default Component;
