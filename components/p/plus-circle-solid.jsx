import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb6rkks4z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb6rkks4z"/>`,
		"fallback": "rivet-icons:plus-circle-solid",
	});
}

export default Component;
