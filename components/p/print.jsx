import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egtd8ibwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egtd8ibwa"/>`,
		"fallback": "uit:print",
	});
}

export default Component;
