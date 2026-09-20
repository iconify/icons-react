import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyq-scbrm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyq-scbrm"/>`,
		"fallback": "qlementine-icons:separate-vertical-16",
	});
}

export default Component;
