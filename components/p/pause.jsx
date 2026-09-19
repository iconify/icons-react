import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzwv6sbhf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzwv6sbhf"/>`,
		"fallback": "icon-park-outline:pause",
	});
}

export default Component;
