import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g51izkbmz.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g51izkbmz"/>`,
		"fallback": "lineicons:sprout",
	});
}

export default Component;
