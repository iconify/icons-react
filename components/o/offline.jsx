import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z21hg6baq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z21hg6baq"/>`,
		"fallback": "oui:offline",
	});
}

export default Component;
