import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwj3tybzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwj3tybzc"/>`,
		"fallback": "hugeicons:logout-circle-02",
	});
}

export default Component;
