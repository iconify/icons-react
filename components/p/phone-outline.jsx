import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okh3m0bdt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okh3m0bdt"/>`,
		"fallback": "lsicon:phone-outline",
	});
}

export default Component;
