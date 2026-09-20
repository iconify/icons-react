import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l37045oqm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l37045oqm"/>`,
		"fallback": "osmic:post-office-14",
	});
}

export default Component;
