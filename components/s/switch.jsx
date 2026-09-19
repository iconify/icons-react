import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guts1yb6o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guts1yb6o"/>`,
		"fallback": "icon-park-outline:switch",
	});
}

export default Component;
