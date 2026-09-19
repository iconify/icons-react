import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x61cv7ysi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x61cv7ysi"/>`,
		"fallback": "at-icons:sand",
	});
}

export default Component;
