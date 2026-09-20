import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx7fe6h-v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kx7fe6h-v"/>`,
		"fallback": "streamline-plump:user-pin-remix",
	});
}

export default Component;
