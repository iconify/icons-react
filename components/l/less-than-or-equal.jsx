import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ondrem6qt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ondrem6qt"/>`,
		"fallback": "hugeicons:less-than-or-equal",
	});
}

export default Component;
