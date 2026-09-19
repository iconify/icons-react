import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlnfy5jfk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlnfy5jfk"/>`,
		"fallback": "icon-park-outline:mindmap-map",
	});
}

export default Component;
