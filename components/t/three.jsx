import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxhi8gm6i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxhi8gm6i"/>`,
		"fallback": "icon-park-solid:three",
	});
}

export default Component;
