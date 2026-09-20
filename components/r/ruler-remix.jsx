import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2sqt4boz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d2sqt4boz"/>`,
		"fallback": "streamline-plump:ruler-remix",
	});
}

export default Component;
