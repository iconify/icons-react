import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_n--ccjl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_n--ccjl"/>`,
		"fallback": "icon-park-outline:message",
	});
}

export default Component;
