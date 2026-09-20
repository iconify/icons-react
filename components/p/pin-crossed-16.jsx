import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ongl97bwg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ongl97bwg"/>`,
		"fallback": "qlementine-icons:pin-crossed-16",
	});
}

export default Component;
