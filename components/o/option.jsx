import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us2_t99qk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us2_t99qk"/>`,
		"fallback": "boxicons:option",
	});
}

export default Component;
