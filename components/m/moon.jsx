import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yojm6_ddd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yojm6_ddd"/>`,
		"fallback": "icon-park-solid:moon",
	});
}

export default Component;
