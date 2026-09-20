import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kii1hnb3e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kii1hnb3e"/>`,
		"fallback": "qlementine-icons:shamisen-16",
	});
}

export default Component;
