import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whgu202qt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whgu202qt"/>`,
		"fallback": "mdi:selection-drag",
	});
}

export default Component;
