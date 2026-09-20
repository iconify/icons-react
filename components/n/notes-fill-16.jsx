import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-m2kmuut.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-m2kmuut"/>`,
		"fallback": "qlementine-icons:notes-fill-16",
	});
}

export default Component;
