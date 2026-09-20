import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq4ay1j3p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq4ay1j3p"/>`,
		"fallback": "rivet-icons:minus-circle-solid",
	});
}

export default Component;
