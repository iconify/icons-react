import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbff0lbyl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbff0lbyl"/>`,
		"fallback": "icon-park-outline:mindmap-list",
	});
}

export default Component;
