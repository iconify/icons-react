import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm5o86bps.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm5o86bps"/>`,
		"fallback": "icon-park-solid:system",
	});
}

export default Component;
