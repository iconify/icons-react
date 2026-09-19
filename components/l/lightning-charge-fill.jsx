import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy0ljfbis.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy0ljfbis"/>`,
		"fallback": "bi:lightning-charge-fill",
	});
}

export default Component;
