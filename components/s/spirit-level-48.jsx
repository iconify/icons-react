import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rchvxnb6e.css';
import '../../css/i/i_vwc81mr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rchvxnb6e"/><path class="i_vwc81mr"/>`,
		"fallback": "energy-icons:spirit-level-48",
	});
}

export default Component;
