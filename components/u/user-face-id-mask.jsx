import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvjckikhh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvjckikhh"/>`,
		"fallback": "streamline-plump:user-face-id-mask",
	});
}

export default Component;
