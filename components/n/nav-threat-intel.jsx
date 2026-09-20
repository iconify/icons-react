import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4buu26ch.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4buu26ch"/>`,
		"fallback": "oui:nav-threat-intel",
	});
}

export default Component;
