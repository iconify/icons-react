import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a553rmbqh.css';
import '../../css/g/ga-aabcqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a553rmbqh"/><path class="ga-aabcqd"/>`,
		"fallback": "solar:map-arrow-left-bold-duotone",
	});
}

export default Component;
