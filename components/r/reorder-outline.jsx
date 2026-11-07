import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c80kiybsf.css';
import '../../css/i/ib6qaybse.css';
import '../../css/e/efa1bkb1o.css';
import '../../css/d/dntz9tmey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c80kiybsf"/><path class="ib6qaybse"/><path class="efa1bkb1o"/><path class="dntz9tmey"/>`,
		"fallback": "solar:reorder-outline",
	});
}

export default Component;
