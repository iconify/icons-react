import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqn6x6bcp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uqn6x6bcp"/>`,
		"fallback": "streamline-plump:select-circle-area-1-solid",
	});
}

export default Component;
