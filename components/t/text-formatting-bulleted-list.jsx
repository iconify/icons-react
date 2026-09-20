import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbwqwcvsm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbwqwcvsm"/>`,
		"fallback": "streamline-block:text-formatting-bulleted-list",
	});
}

export default Component;
