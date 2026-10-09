import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpbaf1bjq.css';
import '../../css/v/vjt9g6_xg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpbaf1bjq"/><path class="vjt9g6_xg"/>`,
		"fallback": "energy-icons:palette-48-bold",
	});
}

export default Component;
