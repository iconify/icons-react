import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unwk3lcee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unwk3lcee"/>`,
		"fallback": "boxicons:screen-light",
	});
}

export default Component;
