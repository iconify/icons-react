import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8u56tb3j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8u56tb3j"/>`,
		"fallback": "oui:nav-info",
	});
}

export default Component;
