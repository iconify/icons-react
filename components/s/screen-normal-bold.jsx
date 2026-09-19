import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg16o2bzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg16o2bzc"/>`,
		"fallback": "iconamoon:screen-normal-bold",
	});
}

export default Component;
