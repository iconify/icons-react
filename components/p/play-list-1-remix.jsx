import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x13w85bev.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x13w85bev"/>`,
		"fallback": "streamline-plump:play-list-1-remix",
	});
}

export default Component;
