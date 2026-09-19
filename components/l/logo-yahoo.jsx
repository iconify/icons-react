import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2hg3jz1w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2hg3jz1w"/>`,
		"fallback": "famicons:logo-yahoo",
	});
}

export default Component;
