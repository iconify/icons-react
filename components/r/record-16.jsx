import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6d8svbfc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6d8svbfc"/>`,
		"fallback": "qlementine-icons:record-16",
	});
}

export default Component;
