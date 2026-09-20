import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-uxu8b6e.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-uxu8b6e"/>`,
		"fallback": "wi:moon-alt-waxing-crescent-2",
	});
}

export default Component;
