import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryotqrb_r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ryotqrb_r"/>`,
		"fallback": "streamline-plump:panoramic-screen-remix",
	});
}

export default Component;
