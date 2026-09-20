import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhb58tbnp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhb58tbnp"/>`,
		"fallback": "osmic:mast-14",
	});
}

export default Component;
