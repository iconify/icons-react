import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8dfhgbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8dfhgbvx"/>`,
		"fallback": "coolicons:link-vertical-fill-round",
	});
}

export default Component;
