import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4p4i7bft.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4p4i7bft"/>`,
		"fallback": "oui:nav-experiments",
	});
}

export default Component;
