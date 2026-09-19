import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8458j73b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8458j73b"/>`,
		"fallback": "ion:ios-arrow-dropup-circle",
	});
}

export default Component;
