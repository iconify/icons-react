import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq0r3bb7p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq0r3bb7p"/>`,
		"fallback": "osmic:museum-14",
	});
}

export default Component;
