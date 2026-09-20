import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc5j-3bez.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xc5j-3bez"/>`,
		"fallback": "streamline-plump:like-1-remix",
	});
}

export default Component;
