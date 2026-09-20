import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msg05sbqr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="msg05sbqr"/>`,
		"fallback": "streamline-plump:octagram-shape-remix",
	});
}

export default Component;
