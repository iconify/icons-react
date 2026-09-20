import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhrp6sb2b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhrp6sb2b"/>`,
		"fallback": "oui:vis-bar-vertical",
	});
}

export default Component;
