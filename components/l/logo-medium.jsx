import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-6li450q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-6li450q"/>`,
		"fallback": "famicons:logo-medium",
	});
}

export default Component;
