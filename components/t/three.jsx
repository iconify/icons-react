import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3h087bjj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3h087bjj"/>`,
		"fallback": "icon-park:three",
	});
}

export default Component;
