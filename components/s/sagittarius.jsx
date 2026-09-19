import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4ji5rb1y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4ji5rb1y"/>`,
		"fallback": "icon-park-outline:sagittarius",
	});
}

export default Component;
