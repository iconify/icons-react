import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbizracty.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbizracty"/>`,
		"fallback": "wi:moon-alt-waxing-crescent-4",
	});
}

export default Component;
