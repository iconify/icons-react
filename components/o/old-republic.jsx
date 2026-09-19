import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4lyu_g1g.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4lyu_g1g"/>`,
		"fallback": "fa6-brands:old-republic",
	});
}

export default Component;
