import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh6v09b2f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh6v09b2f"/>`,
		"fallback": "qlementine-icons:spacing-vertical-16",
	});
}

export default Component;
