import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxzyzjbnh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxzyzjbnh"/>`,
		"fallback": "icon-park-outline:receiver",
	});
}

export default Component;
