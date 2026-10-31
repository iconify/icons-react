import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdgb0sbup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdgb0sbup"/>`,
		"fallback": "coolicons:notebook-fill-round",
	});
}

export default Component;
