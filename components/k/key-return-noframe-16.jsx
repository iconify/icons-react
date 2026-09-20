import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwdjlwbei.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwdjlwbei"/>`,
		"fallback": "qlementine-icons:key-return-noframe-16",
	});
}

export default Component;
