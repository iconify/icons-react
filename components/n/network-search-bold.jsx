import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xltx7yb9x.css';
import '../../css/k/kogil-gfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xltx7yb9x"/><path class="kogil-gfm"/>`,
		"fallback": "streamline-ultimate:network-search-bold",
	});
}

export default Component;
