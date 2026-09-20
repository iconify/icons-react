import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tir7etguw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tir7etguw"/>`,
		"fallback": "oui:token-event",
	});
}

export default Component;
