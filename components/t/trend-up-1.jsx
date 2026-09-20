import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahn2rbxwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahn2rbxwg"/>`,
		"fallback": "lineicons:trend-up-1",
	});
}

export default Component;
