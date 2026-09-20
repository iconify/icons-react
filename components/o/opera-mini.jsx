import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq0cprbui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq0cprbui"/>`,
		"fallback": "lineicons:opera-mini",
	});
}

export default Component;
